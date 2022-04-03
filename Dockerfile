FROM node

ENV REACT_APP_API_URL=https://space-project-backend.herokuapp.com\
         REACT_APP_DOMAIN=dev-jpr90dts.us.auth0.com\
          REACT_APP_CLIENT=2v5PwAnjN1nCPVp7kq9gCdLLEQOqgMyt


RUN mkdir -p /final-project-front-end-zoomage-daydream

COPY ./ final-project-front-end-zoomage-daydream

# set default dir so that next commands executes in /home/app dir
WORKDIR /final-project-front-end-zoomage-daydream

# will execute npm install in /home/app because of WORKDIR
RUN npm install

# no need for /home/app/server.js because of WORKDIR
CMD ["npm", "start"]

