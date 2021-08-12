<?php

namespace App\Repositories;

use App\Contracts\Token\TokenRepositoryInterface;
use App\Contracts\Token\TokenEntityInterface;
use App\Models\Token;
use Exception;

class TokenRepository implements TokenRepositoryInterface
{
    public function __construct(
        private Token $model
    ) {
    }

    public function updateToken($cardId, array $data)
    {
        $token = $this->model->where(TokenEntityInterface::CARD_ID, $cardId)->first();
        if (!$token) {
            return $toke->create(array_merge([
                TokenEntityInterface::CARD_ID => $cardId
            ], $data));
        }
        $token->update($data);
    }
}
