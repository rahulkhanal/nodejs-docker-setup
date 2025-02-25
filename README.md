# Docker
 > Pull the image from Docker Hub

```bash
docker pull node:16
```

 > Build the image from the Dockerfile

```bash
docker build -t nodeapp .
```

 > Run the image

```bash
docker run -p 3000:3000 -d nodeapp
```
