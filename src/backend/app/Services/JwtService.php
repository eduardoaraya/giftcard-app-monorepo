<?php

namespace App\Services;

use App\Contracts\JwtInterface;
use Ahc\Jwt\JWT;

class JwtService implements JwtInterface
{
    private JWT $jwt;

    private string $lastExpirate;

    public function __construct(string $secret) {
        $this->jwt = new JWT($secret);
    }

    public function encode($data): string
    {
        return $this->jwt->encode($data);
    }

    public function decode(string $data): array
    {
        return $this->jwt->decode($data);
    }
}
