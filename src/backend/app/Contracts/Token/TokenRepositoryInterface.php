<?php

namespace App\Contracts\Token;

interface TokenRepositoryInterface
{
    public function getByToken(string $token);

    public function updateToken(string $cardId, array $data);
}
