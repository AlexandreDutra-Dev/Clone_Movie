FROM node:14.18.1
WORKDIR /myApp
ENV PATH /myApp/node_modules/.bin:$PATH

COPY package.json /myApp/package.json
RUN npm install -g @angular/cli@7.3.9
RUN npm install tslib
RUN npm install

COPY . /myApp
CMD ng serve --watch=true --host=0.0.0.0
