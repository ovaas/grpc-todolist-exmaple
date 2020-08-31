FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server
RUN npm install -g pnpm

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json ./
COPY pnpm-lock.yaml ./

# install project dependencies
RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000
CMD [ "http-server", "-p", "3000", "dist" ]