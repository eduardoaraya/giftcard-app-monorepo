<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Contracts\Token\TokenEntityInterface;

class Token extends Model
{
    public $timestamps = true;

    protected $table = TokenEntityInterface::TABLE_NAME;

    protected $fillable = [
        TokenEntityInterface::TOKEN,
        TokenEntityInterface::CARD_ID,
        TokenEntityInterface::EXPIRATE_AT,
    ];

    protected $hidden = [
        TokenEntityInterface::EXPIRATE_AT
    ];

    public function card()
    {
        return $this->belongsTo(Card::class, 'card_id');
    }
}
