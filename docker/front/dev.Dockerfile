FROM node:12 as build
WORKDIR /opt/ossystem.ua/
COPY package*.json ./
RUN npm ci -q
COPY . .
CMD ["npm", "run", "start"]
