<?php

namespace App\Contracts\Card;

interface CardEntityInterface
{
    const TABLE_NAME = 'cards';
    const ID = 'id';
    const NAME = 'name';
    const CARD_NUMBER = 'card_number';
    const PASSWORD = 'password';
    const STATUS = 'status';
    const VALUE = 'value';
    const EXPIRATE_AT = 'expirate_at';

    const ACTIVE = 'active';
    const INACTIVE = 'inactive';
    const EXPIRED = 'expired';

    const STATUS_ALLOWED = [
        self::ACTIVE,
        self::INACTIVE,
        self::EXPIRED,
    ];
}
