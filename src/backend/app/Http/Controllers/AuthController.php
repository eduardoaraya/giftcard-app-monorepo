<?php

namespace App\Http\Controllers;

use App\Repositories\TokenRepository;
use App\Contracts\JwtInterface;

class AuthController extends Controller
{
    /**
     * @param TokenRepository $tokenRepository
     * @param JwtInterface $jwt
     */
    public function __construct(
        private TokenRepository $tokenRepository,
        private JwtInterface $jwt
    ) { }

    public function execute()
    {
        return response()->json([
            'token' => $this->jwt->getJwt()->encode([
                'teste' => true
            ])
        ], 200);
    }
}
