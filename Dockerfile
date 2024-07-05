FROM node:14-alpine

WORKDIR /app
COPY . .
RUN npm install -g foreman


WORKDIR /app/frontend
RUN npm install

WORKDIR /app/backend
RUN npm install 

EXPOSE 8000

CMD ["foreman", "start"]
