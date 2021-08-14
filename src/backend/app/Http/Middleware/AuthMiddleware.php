<?php

namespace App\Http\Middleware;

use App\Contracts\AuthServiceInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Auth\Access\AuthorizationException;
use Closure;
use Exception;


class AuthMiddleware
{

    const PREFIX = 'Bearer';

    /**
     * @param AuthServiceInterface $authService
     */
    public function __construct(
        private AuthServiceInterface $authService
    ) {
    }

    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  \Closure  $next
     * @return JsonResponse|Response
     */
    public function handle(Request $request, Closure $next): JsonResponse | Response
    {
        try {

            $authHeader = $request->header('Authorization');
            if (!$authHeader) {
                throw new AuthorizationException('Authorization header not provided.');
            }

            $fragmentToken = explode(' ', $authHeader);
            if (
                count($fragmentToken) !== 2 and
                reset($fragmentToken) !== self::PREFIX and
                !end($fragmentToken)
            ) {
                throw new AuthorizationException('Authorization header is invalid');
            }

            $token = $this->authService->validateToken(end($fragmentToken));
            if ($this->authService->mustRefresh($token)) {
                $this->authService->refreshToken($token);
            }

            return $next($request);
        } catch (AuthorizationException $e) {
            return $this->getResponseUnauthorized($e->getMessage());
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Internal Error'
            ], 500);
        }
    }

    /**
     * @param string|null $message
     *
     * @return \Illuminate\Http\JsonResponse
     */
    private function getResponseUnauthorized(?string $message = null): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'message' => $message ?? 'Unauthenticated'
        ], 401);
    }
}
