FROM node:lts as builder

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules && npm install
# Copy rest of the files
COPY . .

# Build the project
RUN npm run build

#COPY . .


#COPY --from=builder /app  .

#ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]