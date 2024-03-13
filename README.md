step 1: create image
=> docker build -t image_name .

step 2: run it in port
=> docker run -p 8000:8000 -d --name container_name image_name# nodejs-docker-setup

step 3: changes made in files
=> docker stop democontainer
=> docker rm democontainer
=> docker run -p 8000:8000 -d --name democontainer demo
