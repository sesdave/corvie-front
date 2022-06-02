FROM node:lts as builder

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules && npm install
# Copy rest of the files
COPY . .

# Build the project
RUN npm run build

COPY . .

WORKDIR /app


COPY --from=builder /app/.nuxt/dist  .

#ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]