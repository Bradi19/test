FROM node:12 as build
WORKDIR /opt/ossystem.ua/
COPY package*.json ./
RUN npm ci -q
COPY . .
RUN npm run build

FROM nginx:latest
COPY docker/front/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /opt/ossystem.ua/build/ /usr/share/nginx/html/
VOLUME [ "/usr/share/nginx/html/uploads/" ]
