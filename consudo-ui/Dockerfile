FROM node:14.18.2-alpine3.14 AS build
ENV NODE_ENV production
WORKDIR /usr/src/app/
COPY ["consudo-ui/package.json", "yarn.lock", "/usr/src/app/"]
RUN yarn --pure-lockfile --silent --production
COPY ["consudo-ui", "/usr/src/app/"]
RUN yarn build

FROM socialengine/nginx-spa as production
ENV NODE_ENV production
COPY --from=build /usr/src/app/build /app
