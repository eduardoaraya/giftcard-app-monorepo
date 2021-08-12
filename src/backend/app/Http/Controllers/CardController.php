<?php

namespace App\Http\Controllers;

use App\Repositories\CardRepository;

class CardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        private CardRepository $cardRepository
    ) {
        //
    }

    public function list()
    {
        return $this->cardRepository->getList();
    }

    //
}
