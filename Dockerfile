FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm install -g @angular/cli

EXPOSE 3000

CMD ["ng", "serve", "--host", "0.0.0.0"]
