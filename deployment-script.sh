#!/bin/sh

# Author : Alvin Jake Pabuaya

export KUBECONFIG=/home/jake/.kube/rresidencia;
export KUBE_NAMESPACE=rresidencia;

sudo docker build -t jake0526/pabuaya-portfolio:production .;
echo "~~~~~~~~~~~~~~ Push ~~~~~~~~~~~~~~"
sudo docker logout;
sudo docker login -u "jake0526" -p "Jake#0526";
sudo docker push jake0526/pabuaya-portfolio:production;
echo "~~~~~~~~~~~~~~ Deploy ~~~~~~~~~~~~~~"
envsubst < k8s.yaml | kubectl --kubeconfig=$KUBECONFIG --namespace=$KUBE_NAMESPACE apply -f -;
kubectl --kubeconfig=$KUBECONFIG rollout restart deployment pabuaya-portfolio-production -n $KUBE_NAMESPACE; if [ $? != 0 ]; then echo "First pod"; fi;
