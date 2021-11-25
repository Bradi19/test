FROM node:12
WORKDIR /opt/ossystem.ua/
COPY package*.json ./
RUN npm ci -q \
    && npm -q install pm2 -g
COPY . .
ENV NODE_ENV=development
VOLUME [ "/opt/ossystem.ua/uploads/" ]
EXPOSE 3000
CMD [ "npm", "run", "server" ]
