FROM node:lts as builder

WORKDIR /app

COPY . .


RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=false

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

#ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]