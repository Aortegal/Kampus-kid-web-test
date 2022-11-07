FROM node:16.13.2-alpine as build

WORKDIR /app

COPY package.json ./

RUN npm install && npm install react-router-dom && npm install formik && npm install primereact primeicons && npm install primeflex && npm install @apollo/client graphql \
    && npm install react-apollo --force

COPY . /app
#maracaibo 
EXPOSE 3000

CMD ["npm","start"]