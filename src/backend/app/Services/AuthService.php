<?php

namespace App\Services;

use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Support\Facades\Hash;
use App\Contracts\AuthServiceInterface;
use App\Contracts\Token\TokenRepositoryInterface;
use App\Contracts\Card\CardRepositoryInterface;
use App\Contracts\JwtInterface;
use App\Contracts\Token\TokenEntityInterface;
use Carbon\Carbon;

class AuthService implements AuthServiceInterface
{
    public function __construct(
        private CardRepositoryInterface $cardRepository,
        private TokenRepositoryInterface $tokenRepository,
        private JwtInterface $jwt
    ) {
    }

    public function auth(string $cardNumber, string $password): string
    {
        $card = $this->cardRepository->getByCardNumber($cardNumber);
        if (!$card || !Hash::check($password, $card->password)) {
            throw new AuthorizationException('Unauthenticated');
        }
        $token = $this->jwt->encode($card->toArray());
        $this->tokenRepository->updateToken($card->id, [
            TokenEntityInterface::TOKEN => $token,
            TokenEntityInterface::EXPIRATE_AT => Carbon::now()->addHours(1)
        ]);
        return $token;
    }

    public function validateToken(string $token)
    {
        return $this->tokenRepository->getByToken($token);
    }
}
