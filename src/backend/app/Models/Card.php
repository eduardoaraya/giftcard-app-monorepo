<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;
use App\Contracts\Card\CardEntityInterface;

// implements AuthenticatableContract, AuthorizableContract
class Card extends Model {
    // use Authenticatable, Authorizable, HasFactory;

    protected $table = CardEntityInterface::TABLE_NAME;

    protected $fillable = [
        'name',
        'card_number',
        'password',
    ];

    protected $hidden = [
        'password',
    ];
}