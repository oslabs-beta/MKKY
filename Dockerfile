FROM node:16.13
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install && \
    npm run build
EXPOSE 3000
CMD ["npm", "start"]