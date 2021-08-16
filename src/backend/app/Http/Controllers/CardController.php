<?php

namespace App\Http\Controllers;

use App\Contracts\Card\CardRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

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

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function getInfo(Request $request): JsonResponse
    {
        try {
            $card = $request->card;
            $info = $this->cardRepository->getInfo($card->id);
            return response()->json([
                'data' => $info
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
