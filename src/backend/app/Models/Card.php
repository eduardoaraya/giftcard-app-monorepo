<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Contracts\Card\CardEntityInterface;

class Card extends Model
{

    public $timestamps = true;

    protected $table = CardEntityInterface::TABLE_NAME;

    protected $fillable = [
        'name',
        'card_number',
        'password',
    ];

    protected $hidden = [
        'password',
    ];

    public function messages()
    {
        return $this->hasMany(Messages::class, 'card_id');
    }

    public function scopeLastMessage($query)
    {
        return $query->whereHas('messages', function ($messagesQuery) {
            $messagesQuery->getLast();
        });
    }
}
