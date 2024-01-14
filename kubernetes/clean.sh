#!/bin/bash


echo "----------------------------------------------------------------------------------"
echo "Pull images"
echo "----------------------------------------------------------------------------------"

docker pull node:latest



echo "----------------------------------------------------------------------------------"
echo "Build all docker images"
echo "----------------------------------------------------------------------------------"

cd ..
docker build -t aams_image .




echo "----------------------------------------------------------------------------------"
echo "Delete previous minikube and start new one"
echo "----------------------------------------------------------------------------------"

# minikube delete
# minikube start
# minikube status





echo "----------------------------------------------------------------------------------"
echo "Load images to minikube"
echo "----------------------------------------------------------------------------------"

minikube image load aams_image






echo "----------------------------------------------------------------------------------"
echo "Apply kubernetes deployment"
echo "----------------------------------------------------------------------------------"
kubectl apply -f aams-deployment.yml
kubectl get deployments








echo "----------------------------------------------------------------------------------"
echo "Dashboard"
echo "----------------------------------------------------------------------------------"
minikube service --all
minikube dashboard --url



# # # # minikube mount /home/ahmed.soliman@Avrcorp.net/cs2/cs2-platform-engine/model:/data/model
# # # # minikube dashboard --url