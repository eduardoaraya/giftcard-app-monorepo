<?php

namespace App\Repositories;

use App\Contracts\Token\TokenRepositoryInterface;
use App\Models\Token;

class TokenRepository implements TokenRepositoryInterface
{
    public function __construct(
        private Token $model
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
