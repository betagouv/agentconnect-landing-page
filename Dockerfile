FROM node:latest

WORKDIR /app

COPY . .

RUN npm i

CMD npm run serve