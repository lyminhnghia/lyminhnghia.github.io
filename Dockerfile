FROM node:16.16.0

ENV APP_PATH /home/node/app
RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

COPY package.json yarn.lock $APP_PATH/

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
