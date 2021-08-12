<?php

namespace App\Contracts\Token;

interface TokenEntityInterface
{
    const TABLE_NAME = 'tokens';
    const ID = 'id';
    const CARD_ID = 'card_id';
    const TOKEN = 'token';
    const EXPIRATE_AT = 'expirate_at';
}
