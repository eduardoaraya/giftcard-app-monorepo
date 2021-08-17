<?php

namespace App\Services;

use GuzzleHttp\Client;

class TransactionsService
{
    const BASE_URL = 'https://133b8793-d9dc-47b1-b2fe-4831f8859a7b.mock.pstmn.io/';

    public function getEndpoint(): string
    {
        return env('TODO_ENDPOINT');
    }

    public function getAuthorization(): string
    {
        return env('TODO_APIKEY');
    }

    public function execute()
    {
        $client = new Client();
        return $client->request('GET', $this->getEndpoint() . 'api/v1/gift-card/transactions', [
            'headers' => [
                'x-api-key' => $this->getAuthorization()
            ]
        ]);
    }
}
