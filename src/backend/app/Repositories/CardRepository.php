<?php

namespace App\Repositories;

use App\Contracts\Card\CardRepositoryInterface;
use App\Models\Card;

class CardRepository implements CardRepositoryInterface
{
    public function __construct(
        private Card $model
    ) {
    }

    public function getList()
    {
        try {
            return $this->model->get();
        } catch (\Exception $e) {
        }
    }
}
