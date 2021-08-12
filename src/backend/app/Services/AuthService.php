<?php

namespace App\Services;

use App\Contracts\AuthServiceInterface;
use App\Contracts\Token\TokenRepositoryIterface;

class AuthService implements AuthServiceInterface
{
    public function __construct(
        private TokenRepositoryIterface $tokenRepository,
    ) {
    }
}
