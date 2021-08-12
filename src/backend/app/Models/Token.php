<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;
use App\Contracts\Token\TokenEntityInterface;

class Token extends Model
{
    protected $table = TokenEntityInterface::TABLE_NAME;

    protected $fillable = [
        TokenEntityInterface::TOKEN,
    ];
}
