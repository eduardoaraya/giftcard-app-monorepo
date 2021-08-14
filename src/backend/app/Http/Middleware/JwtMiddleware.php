<?php

namespace App\Http\Middleware;

use App\Contracts\AuthServiceInterface;
use Closure;

class JwtMiddleware
{

    const PREFIX = 'Bearer';

    public function __construct(
        private AuthServiceInterface $authService
    ) {
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $authHeader = $request->header('Authorization');
        if (!$authHeader) {
            return $this->getResponseUnauthorized();
        }

        $fragmentToken = explode(' ', $authHeader);
        if (
            count($fragmentToken) !== 2 ||
            reset($fragmentToken) !== self::PREFIX ||
            !end($fragmentToken)
        ) {
            return $this->getResponseUnauthorized();
        }

        $token = $this->authService->validateToken(end($fragmentToken));
        dd($token);
        return $next($request);
    }

    public function getResponseUnauthorized()
    {
        return response()->json([
            'message' => 'Unauthenticated'
        ], 401);
    }
}
