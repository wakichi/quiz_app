FROM node:16.15.0-alpine
WORKDIR /usr/src/app

COPY . /usr/src/app/
COPY package.json /usr/src/app/
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
RUN npm install react-scripts