pipeline{
    agent any 
    stages{
        stage("BuildNextJSproject"){
           steps{
              nodejs("NodeJS-NPM"){
              bat 'npm install'
              bat 'npm run build'
            }
           }      
    }
        stage("DockericeApplication"){
           steps{
             bat 'docker build -t kidscounsileracr.azurecr.io/kidcounsiler .'
            }
           }     
        stage("ImagePushToDockerHub"){
           steps{

                bat 'docker login kidscounsileracr.azurecr.io -u kidscounsileracr -p qRwJDwr9Jj884+MDqKwB7pD2vi3Ml0x0Rpzq4AeB3X+ACRAnlRMX'
                bat 'docker push kidscounsileracr.azurecr.io/kidcounsiler'
           }       
         }
          stage("DeployApplicationInAKS"){
           steps{

                  withKubeConfig(caCertificate: '', clusterName: '', contextName: '', credentialsId: 'K8', namespace: '', restrictKubeConfigAccess: false, serverUrl: '') {
                        bat 'kubectl apply -f  aks-deploy-from-acr.yaml '
                  }
               
                
           }       
         }
    }
}