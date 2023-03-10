#!bin/bash

killall ngrok 
killall docker
docker stop $(docker ps -a -q)
git pull origin main
docker build . -t sicei:0.0.1
docker run -p 3000:3000 -d sicei:0.0.1
ngrok http 3000 >> /dev/null &
sleep 5
url=$(curl -s localhost:4040/api/tunnels | jq .tunnels[0].public_url)
echo "Application served in $url" 

