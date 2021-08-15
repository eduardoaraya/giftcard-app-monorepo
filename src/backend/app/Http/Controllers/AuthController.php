<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\Access\AuthorizationException;
use App\Repositories\TokenRepository;
<<<<<<< Updated upstream
use App\Contracts\AuthServiceInterface;
=======
use App\Contracts\JwtInterface;
>>>>>>> Stashed changes

class AuthController extends Controller
{
    /**
     * @param AuthServiceInterface $authService
     */
    public function __construct(
        private AuthServiceInterface $authService
    ) { }

    /**
     * @param Request $request
     */
    public function execute(Request $request)
    {
        $this->validate($request, [
            'card_number' => 'required|min:16|max:16|string',
            'password' => 'required|min:6|max:6|string'
        ]);

        try {

            $token = $this->authService->auth(
                $request->input('card_number'),
                $request->input('password')
            );

            return response()->json([
                'token' => $token
            ], 200);

        } catch (AuthorizationException $exception) {

            return response()->json([
                'message' => $exception->getMessage()
            ], 401);
        }
    }
}
