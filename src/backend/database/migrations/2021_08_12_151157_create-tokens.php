<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Contracts\Token\TokenEntityInterface;
use App\Contracts\Card\CardEntityInterface;

class CreateTokens extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(TokenEntityInterface::TABLE_NAME, function (Blueprint $table) {
            $table->id();
            $table->foreignId(TokenEntityInterface::CARD_ID)->constrained('cards');
            $table->text(TokenEntityInterface::TOKEN);
            $table->dateTime(CardEntityInterface::TABLE_NAME);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop(TokenEntityInterface::TABLE_NAME);
    }
}
