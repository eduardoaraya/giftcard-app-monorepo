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
            $table->bigInteger(TokenEntityInterface::CARD_ID)->unsigned()->unique();
            $table->text(TokenEntityInterface::TOKEN);
            $table->dateTime(TokenEntityInterface::EXPIRATE_AT);
            $table->timestamps();
            $table->foreign(TokenEntityInterface::CARD_ID)->references('id')->on(CardEntityInterface::TABLE_NAME);
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
