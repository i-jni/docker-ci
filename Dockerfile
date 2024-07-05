FROM node:20.15-alpine3.19
WORKDIR /app
RUN npm install -g serve
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]




