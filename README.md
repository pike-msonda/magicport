# Project API

## Installation Using docker  

```
docker compose up -d 
```

Install dependencies
Run the following commands in ``api`` folder
```
composer install 
```
```
cp .env.example .env

```

DB commands
```
php artisan migrate
php db:seed
```

access client on ``http://localhost:3000``

## Installation standalone

Install dependencies
Run the following commands in ``api`` folder
```
cd composer install 
```
```
cp .env.example .env

```

DB commands
```
php artisan migrate
php db:seed
```

Run server 
```
php artisan serve
```

Now cd into ``client`` folder and run the following commands

```
npm install  
```

Run client server
```
npm run start
```

