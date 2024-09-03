FROM php:8.2-fpm AS base

WORKDIR /var/www/api
ADD . /var/www/api
RUN apt-get update && apt-get install -y libzip-dev

RUN docker-php-ext-configure zip
RUN docker-php-ext-install mysqli pdo pdo_mysql zip

RUN chown -R www-data:www-data /var/www/api

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . /var/www/api

FROM base as dev
WORKDIR /var/www/api
