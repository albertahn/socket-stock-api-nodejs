FROM node:slim

WORKDIR /usr/app/src

COPY package*.json .

RUN npm install

COPY . .

CMD ["node", "src/index.js"]

EXPOSE 4040
