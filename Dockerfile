FROM node:lts as builder

WORKDIR /app

COPY . .


RUN rm -rf node_modules && \
  npm install \

#FROM node:lts

#WORKDIR /app
RUN npm run build

COPY --from=builder /app  .

#ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]