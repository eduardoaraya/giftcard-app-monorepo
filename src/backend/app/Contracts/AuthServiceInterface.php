<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface AuthServiceInterface
{
    const PREFIX = 'Bearer';

    /**
     *  @param string $cardNumnber
     *  @param string $password
     *
     *  @return string
     *  @throws AuthorizationException
     */
    public function auth(string $cardNumber, string $password): string;

    /**
     * @param string $token
     *
     * @return \App\Models\Token
     * @throws AuthorizationException
     */
    public function validateToken(string $token): \App\Models\Token;

    /**
     * @param \App\Models\Token $token
     *
     * @return void
     */
    public function refreshToken(\App\Models\Token $token): void;

    /**
     * @param \App\Models\Token $token
     *
     * @return bool
     */
    public function mustRefresh(\App\Models\Token $token): bool;

    /**
     * @param Request $request
     *
     * @return \App\Models\Token
     */
    public function handleRequest(Request $request): \App\Models\Token;
}
