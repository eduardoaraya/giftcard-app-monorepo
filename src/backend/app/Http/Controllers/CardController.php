<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Services\TransactionsService;
use App\Contracts\Card\CardRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class CardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        private CardRepositoryInterface $cardRepository,
        private TransactionsService $transactionsService
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

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function list(): JsonResponse
    {
        try {
            $list = $this->cardRepository->getList();
            return response()->json([
                'data' => $list
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get transactions by api
     *
     * @return JsonResponse
     */
    public function getTransactions(Request $request): JsonResponse
    {
        try {
            $page = $request->get('page');
            $perPage = 5;
            $content = $this->transactionsService->execute()->getBody();
            $content = collect(json_decode($content));
            $paginate = new LengthAwarePaginator(
                $content->forPage($page, $perPage),
                $content->count(),
                $perPage,
                $page,
                []
            );
            return response()->json([
                'data' => $paginate
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
