FROM node:alpine
WORKDIR /app
COPY . package.*
RUN npm install
COPY .. /app/
EXPOSE 3000
CMD ["npm" "start"]

