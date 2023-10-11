FROM node:19-bullseye

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json ./

RUN npm install

# Bundle app source
COPY . /app

CMD [ "npm", "run", "start" ]

EXPOSE 80