FROM node:16
WORKDIR /app
COPY package.* /app
RUN rm -rf node_modules
RUN npm install
COPY ./ /app
EXPOSE 3000
CMD ["npm","run","start"]


