FROM node:16 AS build
WORKDIR /app
COPY package.* /app
RUN rm -rf node_modules
RUN npm install
RUN npm install appdynamics
COPY ./ /app
RUN npm run start
# EXPOSE 5000
# CMD ["npm","run","start"]


FROM nginx:alpine
COPY --from=build app/dist/* usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
