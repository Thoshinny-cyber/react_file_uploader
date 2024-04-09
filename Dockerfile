FROM node:16
WORKDIR /app
COPY package.* /app
RUN rm -rf node_modules
RUN npm install
RUN npm install appdynamics
COPY ./ /app
EXPOSE 5000
CMD ["npm","run","start"]
