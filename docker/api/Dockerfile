FROM node:12 as build
WORKDIR /opt/ossystem.ua/
COPY package*.json ./
RUN npm ci -q
COPY . .

FROM node:12-alpine
LABEL organization="ossystem"\
      maintainer="u@xaked.com"
WORKDIR /opt/ossystem.ua/
ENV NODE_ENV=production
COPY --chown=node:node --from=build /opt/ossystem.ua/ /opt/ossystem.ua/

VOLUME [ "/opt/ossystem.ua/uploads/" ]
CMD [ "npm", "run", "server" ]
EXPOSE 3000
