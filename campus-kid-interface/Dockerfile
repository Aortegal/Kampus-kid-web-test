FROM php:7.4-cli
# INSTALL ZIP TO USE COMPOSER
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libzip-dev \
    unzip
RUN docker-php-ext-install zip
# INSTALL AND UPDATE COMPOSER
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer self-update
WORKDIR /usr/src/myapp
COPY . .
# INSTALL YOUR DEPENDENCIES
RUN composer install
CMD php gate.php