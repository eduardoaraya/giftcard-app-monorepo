<?php

namespace App\Http\Controllers;

use App\Contracts\Card\CardRepositoryInterface;

class CardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        private CardRepositoryInterface $cardRepository
    ) {
    }

    public function list()
    {
        return $this->cardRepository->getList();
    }
}
