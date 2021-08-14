<?php

namespace App\Contracts;
use Ahc\Jwt\JWT;

interface JwtInterface
{
    public function encode(array $data): string;

    public function decode(string $data): array;
}
