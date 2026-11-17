FROM node:20-alpine

RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Definir argumento de construcción para Prisma
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN if [ -d "prisma" ]; then npx prisma generate; fi

EXPOSE 3000

CMD ["node", "server.js"]