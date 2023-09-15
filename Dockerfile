FROM node:14

WORKDIR /usr

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "run" , "build"]