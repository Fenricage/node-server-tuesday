FROM node:latest

MAINTAINER fenricage@gmail.com

# 1.
WORKDIR /tmp
ADD package.json /tmp/package.json
RUN npm config set registry http://registry.npmjs.org/
RUN npm install
RUN mkdir -p /usr/src/app
RUN cp -a /tmp/node_modules /usr/src/app

WORKDIR /usr/src/app
# 2.

ADD . /usr/src/app

EXPOSE 5000

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application

CMD /wait && npm run build && npm run prod

#CMD [ "npm", "run", "start" ]
