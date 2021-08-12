<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\JwtService;
use App\Contracts\JwtInterface;
use App\Contracts\Token\TokenRepositoryInterface;
use App\Contracts\Card\CardRepositoryInterface;
use App\Repositories\TokenRepository;
use App\Repositories\CardRepository;
use App\Contracts\AuthServiceInterface;
use App\Services\AuthService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(JwtInterface::class, function($app) {
            return new JwtService(env('JWT_SECRET'));
        });

        $this->app->bind(TokenRepositoryInterface::class, TokenRepository::class);
        $this->app->bind(CardRepositoryInterface::class, CardRepository::class);
        $this->app->bind(AuthServiceInterface::class, AuthService::class);
    }
}
