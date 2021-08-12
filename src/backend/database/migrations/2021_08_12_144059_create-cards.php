<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Contracts\Card\CardEntityInterface;

class CreateCards extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(CardEntityInterface::TABLE_NAME, function (Blueprint $table) {
            $table->id();
            $table->string(CardEntityInterface::NAME);
            $table->string(CardEntityInterface::CARD_NUMBER, 16);
            $table->string(CardEntityInterface::PASSWORD);
            $table->enum(CardEntityInterface::STATUS, CardEntityInterface::STATUS_ALLOWED)->default(CardEntityInterface::ACTIVE);
            $table->bigInteger(CardEntityInterface::VALUE);
            $table->dateTime(CardEntityInterface::EXPIRATE_AT);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop(CardEntityInterface::TABLE_NAME);
    }
}
