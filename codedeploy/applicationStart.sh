#!/bin/sh
cd /home/ubuntu/webapp/
npm i
sudo npm i nodemon -g
sudo npm install pm2 -g
sudo pm2 stop all
sudo pm2 start app.js
# nohup npm start &
