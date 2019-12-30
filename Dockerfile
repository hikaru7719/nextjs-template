FROM node:12
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN yarn install
CMD yarn dev
