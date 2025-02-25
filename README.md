# Docker Hub
 > Pull the image from Docker Hub
```bash
docker pull <image-name>
```

 > See the image
```bash
docker images
```
 > Run the image
```bash
docker run <image-name>
docker run -p 8000:8000 <image-name>
docker run -p 8000:8000 --name <container-name> <image-name>
docker run -it <image-name>
```
-it : interactive mode which allows you to run the container in interactive mode. It means you can run image terminal from the host machine.
-p : publish a container’s port(s) to the host
--name : give a name to the container

 > Stop the container
```bash
docker stop <container-name>
```