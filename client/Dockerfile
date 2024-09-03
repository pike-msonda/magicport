
FROM node:18.3-alpine AS base

WORKDIR /var/www/app
ADD . /var/www/app

COPY package*.json ./

RUN npm install

COPY . .


FROM base as dev
WORKDIR /var/www/app
ADD . /var/www/app

CMD ["npm", "run","start"]