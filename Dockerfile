FROM node:16.13.0 as build

WORKDIR /app

COPY ./package*.json ./
COPY ./vue.config.js .
COPY ./babel.config.js .
COPY ./.eslintrc.js .
#COPY ./.env .

RUN [ "npm", "install", "-g", "@vue/cli" ]
RUN [ "npm", "install" ]
#RUN [ "npm", "run", "lint" ]


COPY ./ ./
#COPY ./public/ ./public/
COPY ./assets/ ./assets/

RUN [ "npm", "run", "build" ]


USER 1001

FROM node:16.13.0
WORKDIR /app
COPY --from=build /app  .
#COPY --from=build /build/dist .
EXPOSE 3000

CMD [ "npm", "start" ]