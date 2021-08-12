<?php

namespace App\Repositories;

use App\Contracts\Card\CardRepositoryInterface;
use App\Contracts\Card\CardEntityInterface;
use App\Models\Card;

class CardRepository implements CardRepositoryInterface
{
    public function __construct(
        private Card $model
    ) {
    }

    public function getByCardNumber(string $cardNumer)
    {
        return $this->model->where(CardEntityInterface::CARD_NUMBER, $cardNumer)->first();
    }
}
