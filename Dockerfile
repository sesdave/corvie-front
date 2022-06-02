FROM node:lts as builder

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

# Copy rest of the files
COPY . .

# Build the project
RUN npm run build

#COPY . .


#COPY --from=builder /app  .

#ENV HOST 0.0.0.0
#EXPOSE 3000

#CMD [ "npm", "start" ]


# Copy the package.json and install dependencies


FROM nginx:alpine as production-build
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]