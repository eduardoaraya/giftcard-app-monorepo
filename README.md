## Configurations

Copy and paste the file .env.example and rename to .env. Now just settings the config variables.

Essential Variables to application

- Application Keys
- DB variables
- TODO API Integration

```
APP_KEY=
JWT_SECRET=

DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=giftcard
DB_USERNAME=totalchallenge
DB_PASSWORD=5678465


TODO_ENDPOINT=
TODO_APIKEY=
```

\*The bank settings you find in docker-compose.yaml. Replace by your preference.

---

## Instalation

- Run `docker-compose up -d`
- Run `docker-compose exec php composer install`
- Run `docker-compose exec php php artisan migrate`
- Run `docker-compose exec php php artisan db:seed`
- Run `docker-compose exec front yarn`
- Run `docker-compose exec front yarn build`

---

## Informations

### Endpoints

- backend: http://backend.localhost/api/
- frontend: http://frontend.localhost

\*Send request to http://backend.localhost/api/list for get all cards registred in application.
You can authenticate with the card number and default password: **123123**

### Appliaction using:

- nginx:latest
- postgres:13
- php:8-fpm
- node:14

### Frameworks

- Lumen:^8.0
- React:^17.0.2

### Tests

Tests not implemented
