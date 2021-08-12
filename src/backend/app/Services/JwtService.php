<?php

namespace App\Services;

use App\Contracts\JwtInterface;
use Ahc\Jwt\JWT;

class JwtService implements JwtInterface
{
    private JWT $jwt;

    public function __construct(string $secret)
    {
        $this->jwt = new JWT($secret);
    }

    public function getJwt(): JWT
    {
        return $this->jwt;
    }
}
