FROM node:14-alpine



EXPOSE 3000
ENV BACK_IP = ${BACK_IP}

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]


RUN npm cache clean --force && \
    npm install -g npm@latest && \
    npm install

COPY . .
WORKDIR /app/src/axios
RUN sed -i 's/$BACK_IP$/{BACK_IP}/' axiosConfig.js

WORKDIR /app
CMD ["npm", "start"]
