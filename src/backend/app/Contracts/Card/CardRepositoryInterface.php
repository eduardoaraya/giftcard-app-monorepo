<?php

namespace App\Contracts\Card;

interface CardRepositoryInterface
{
    public function getByCardNumber(string $cardNumer);

    public function getList();

    public function getInfo(string $cardId);
}
