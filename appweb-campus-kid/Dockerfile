FROM node:16.13.2-alpine as build

WORKDIR /app

COPY package.json ./

RUN npm install --force && npm install react-router-dom --force && npm install formik --force && npm install primereact primeicons --force && npm install primeflex --force

COPY . /app
#maracaibo 
EXPOSE 3000

CMD ["npm","start"]