# getting base image alpine
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#RUN npm start

EXPOSE 9000

CMD ["npm", "start"]
