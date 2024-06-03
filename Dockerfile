FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli

EXPOSE 3000

CMD ["ng", "serve", "--host", "0.0.0.0"]
