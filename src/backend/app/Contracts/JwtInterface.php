<?php

namespace App\Contracts;
use Ahc\Jwt\JWT;

interface JwtInterface
{
    public function getJwt(): JWT;
}
