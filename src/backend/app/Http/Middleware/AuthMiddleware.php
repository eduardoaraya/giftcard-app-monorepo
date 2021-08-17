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
            $token = $this->authService->handleRequest($request);
            $request->request->add([
                'card' => $token->card
            ]);
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
