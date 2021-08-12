<?php

namespace App\Http\Controllers;

use App\Repositories\TokenRepository;

class AuthController extends Controller
{
    public function __construct(
        private TokenRepository $tokenRepository
    ) { }

    public function list()
    {
        return $this->tokenRepository->getList();
    }
}
