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
use App\Models\Token;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AuthService implements AuthServiceInterface
{
    /**
     * @param CardRepositoryInterface $cardRepository
     * @param TokenRepositoryInterface $tokenRepository
     * @param JwtInterface $jwt
     */
    public function __construct(
        private CardRepositoryInterface $cardRepository,
        private TokenRepositoryInterface $tokenRepository,
        private JwtInterface $jwt
    ) {
    }

    /**
     *  @inheritdoc
     */
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

    /**
     * @inheritdoc
     */
    public function validateToken(string $token): \App\Models\Token
    {
        $token = $this->tokenRepository->getByToken($token);
        if (!$token) {
            throw new AuthorizationException('Unauthenticated');
        }
        if (Carbon::now()->greaterThan($token->expirate_at)) {
            throw new AuthorizationException('Unauthenticated');
        }
        return $token;
    }

    /**
     * @inheritdoc
     */
    public function refreshToken(\App\Models\Token $token): void
    {
        $this->tokenRepository->updateToken($token->card_id, [
            TokenEntityInterface::EXPIRATE_AT => Carbon::now()->addHours(1)
        ]);
    }

    /**
     * @inheritdoc
     */
    public function mustRefresh(\App\Models\Token $token): bool
    {
        return Carbon::now()->diffInMinutes($token->expirate_at) < 10;
    }

    /**
     * @inheritdoc
     */
    public function handleRequest(Request $request): Token
    {
        $authHeader = $request->header('Authorization');
        if (!$authHeader) {
            throw new AuthorizationException('Authorization header not provided.');
        }

        $fragmentToken = explode(' ', $authHeader);
        if (
            count($fragmentToken) !== 2 and
            reset($fragmentToken) !== self::PREFIX and
            !end($fragmentToken)
        ) {
            throw new AuthorizationException('Authorization header is invalid');
        }

        $token = $this->validateToken(end($fragmentToken));
        if ($this->mustRefresh($token)) {
            $this->refreshToken($token);
        }

        return $token;
    }
}
