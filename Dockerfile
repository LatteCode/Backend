FROM node:current-alpine

WORKDIR /usr/src/lattecode-api
COPY package*.json ./
RUN yarn install

COPY . .
EXPOSE 3000


CMD ["yarn", "start"]