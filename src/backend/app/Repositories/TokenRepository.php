<?php

namespace App\Repositories;

use App\Contracts\Token\TokenRepositoryInterface;
use App\Contracts\Token\TokenEntityInterface;
use App\Models\Token;
use Exception;

class TokenRepository implements TokenRepositoryInterface
{
    /**
     * @param Token $model
     */
    public function __construct(
        private Token $model
    ) {
    }

    /**
     * @inheritdoc
     */
    public function updateToken(string $cardId, array $data): Token
    {
        $token = $this->model->where(TokenEntityInterface::CARD_ID, $cardId)->first();
        if (!$token) {
            return $token->create(array_merge([
                TokenEntityInterface::CARD_ID => $cardId
            ], $data));
        }
        $token->update($data);
        return $token;
    }

    /**
     * @inheritdoc
     */
    public function getByToken(string $token): ?Token
    {
        return $this->model->where(TokenEntityInterface::TOKEN, $token)->first();
    }
}
