FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
ENV NODE_OPTIONS="--openssl-legacy-provider"

CMD ["npm","start"]