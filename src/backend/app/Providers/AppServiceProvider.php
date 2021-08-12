<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\JwtService;
use App\Contracts\JwtInterface;
use App\Contracts\Token\TokenRepositoryInterface;
use App\Contracts\Card\CardRepositoryInterface;
use App\Repositories\Token\TokenRepositoryInterface;
use App\Repositories\Card\CardRepositoryInterface;

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

        $this->app->register();
    }
}
