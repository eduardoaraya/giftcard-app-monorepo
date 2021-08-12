<?php

namespace App\Contracts;

interface AuthServiceInterface
{
    public function auth(string $cardNumber, string $password): string;
}
