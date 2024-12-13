FROM node

WORKDIR /eShop 

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 3000 

CMD ["npm", "run", "dev"]