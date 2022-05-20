# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# microfrontend envs
ENV REACT_APP_PRODUCTS_MICROFRONTEND_URL https://microfe.sagebrush.dev/products/dist/mf-products.js
ENV REACT_APP_CART_MICROFRONTEND_URL https://microfe.sagebrush.dev/cart/dist/mf-cart.js
ENV REACT_APP_ACCOUNT_MICROFRONTEND_URL https://microfe.sagebrush.dev/account/static/js/main.8768b740.js

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY . ./

# start app
CMD ["npm", "start"]