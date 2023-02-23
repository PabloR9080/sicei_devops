killall ngrok 
killall docker
systemctl stop nginx
git pull origin main
docker run -p 3000:3000 -d sicei:0.0.1
systemctl start nginx
ngrok http 3000 >> /dev/null &
url=$(curl -s localhost:4040/api/tunnels | jq .tunnels[0].public_url)
echo "Application served in $url"

