FROM node:15.6.0-alpine3.10

WORKDIR /usr/front-end/src/server
COPY ./server/build build
COPY ./server/package.json package.json
COPY ./server/server.js server.js
COPY ./server/yarn.lock yarn.lock
RUN yarn install

CMD ["yarn","start"]
EXPOSE 80
