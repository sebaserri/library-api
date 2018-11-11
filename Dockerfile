FROM node:8.9-alpine
ENV NODE_ENV develop
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --develop --silent && mv node_modules ../
COPY . .
EXPOSE 4203
CMD [ "npm", "start" ]
