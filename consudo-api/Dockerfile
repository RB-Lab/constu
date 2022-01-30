FROM node:14.18.2-alpine3.14
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["consudo-api/package.json", "yarn.lock", "/usr/src/app/"]
RUN yarn --pure-lockfile --silent --production
COPY consudo-api .
RUN chown -R node /usr/src/app
USER node
CMD yarn start
