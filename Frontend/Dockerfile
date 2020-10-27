FROM node:12.12.0

RUN mkdir -p /node

ADD . /node

WORKDIR /node


RUN npm install --silent

CMD ["node", "--version"]