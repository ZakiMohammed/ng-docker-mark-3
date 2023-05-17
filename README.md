# NgDocker - Mark 3

Check out the CodeOmelet blog post for this project.

Link: https://codeomelet.com/posts/nginx-cache-config-for-dockerized-angular-app-ngdocker
___

Nginx cache configuration for Angular and Docker powered by Cirrus UI.

## Build Docker Image and Run Docker Container

```
# build image
docker build -t ng-docker:mark-3 .

# run container
docker run -p 3300:80 --name ng-docker-mark-3-container-1 ng-docker:mark-3

# list images
docker image ls

# stop container
docker stop ng-docker-mark-3-container-1

# remove container
docker rm ng-docker-mark-3-container-1
```