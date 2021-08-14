<?php

namespace App\Contracts\Token;

use App\Models\Token;

interface TokenRepositoryInterface
{

    /**
     * @param string $cardId
     * @param array $data
     *
     * @return Token
     */
    public function updateToken(string $cardId, array $data): Token;

    /**
     * @param string $token
     *
     * @return Token|null
     */
    public function getByToken(string $token): ?Token;
}
