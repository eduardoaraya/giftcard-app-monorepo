<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Contracts\Card\CardEntityInterface;

class CreateCards extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table(CardEntityInterface::TABLE_NAME)->insert([
            [
                CardEntityInterface::NAME => Str::random(5),
                CardEntityInterface::PASSWORD => Hash::make('123123'),
                CardEntityInterface::CARD_NUMBER => rand(0, pow(10, 16)),
                CardEntityInterface::VALUE => 10000,
                CardEntityInterface::EXPIRATE_AT => new DateTime(),
            ],
            [
                CardEntityInterface::NAME => Str::random(5),
                CardEntityInterface::PASSWORD => Hash::make('123123'),
                CardEntityInterface::CARD_NUMBER => rand(0, pow(10, 16)),
                CardEntityInterface::VALUE => 10000,
                CardEntityInterface::EXPIRATE_AT => new DateTime(),
            ],
            [
                CardEntityInterface::NAME => Str::random(5),
                CardEntityInterface::PASSWORD => Hash::make('123123'),
                CardEntityInterface::CARD_NUMBER => rand(0, pow(10, 16)),
                CardEntityInterface::VALUE => 10000,
                CardEntityInterface::EXPIRATE_AT => new DateTime(),
            ],
            [
                CardEntityInterface::NAME => Str::random(5),
                CardEntityInterface::PASSWORD => Hash::make('123123'),
                CardEntityInterface::CARD_NUMBER => rand(0, pow(10, 16)),
                CardEntityInterface::VALUE => 10000,
                CardEntityInterface::EXPIRATE_AT => new DateTime(),
            ]
        ]);
    }
}
