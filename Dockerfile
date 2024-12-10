#test-2
FROM node:18-alpine
# Install Redis server
RUN apk update
RUN mkdir -p /simple-crud-app
WORKDIR /simple-crud-app
COPY . .
#COPY redis.conf /etc/redis/redis.conf
#RUN npm ci
RUN npm install
EXPOSE 3000 
#RUN iptables -A INPUT -p tcp --dport 80 -j ACCEPT
#RUN iptables -A INPUT -p tcp --dport 443 -j ACCEPT
#CMD [ "npm", "start" ]
CMD ["sh", "-c", "npm run dev"]
