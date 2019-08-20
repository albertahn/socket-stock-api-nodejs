# Socket Stock API

This repository implements a web API written in Nodejs and it uses Express and Socket.io under the hood to serve stock market information in real-time. The available in the ```./data/data.js``` file. 

### Main goal

My goal with this repository is successfully run this application behind a proxy server and load-balancer with 4 instances. In this case, I am using Docker and docker-compose to "orchestrate" this architecture. 

### How to run: Docker

1 - Build the container

``` docker build -t socket-stock-api . ```

2 - Run it

``` docker run -p 8080:4040 -d socket-stock-api ```

### How to run: docker-compose

Docker-compose will boot 4 instances of this api and then will expose them using Nginx at 8080 port, acting as a proxy server and as a load balancer too. When you start firing requests, Nginx will balance the load in the 4 available instances.

### How to run: Development mode

1 - Install the dependencies after cloning the repository

``` npm install ```

2 - Run it

``` npm run dev ```