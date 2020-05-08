FROM node

ENV PORT 3000
ENV NODE_ENV development

WORKDIR /code

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY src src
COPY public public

CMD ["yarn", "start"]