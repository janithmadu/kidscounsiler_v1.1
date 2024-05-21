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
             bat 'docker login kidscounsileracr.azurecr.io -u kidscounsileracr -p '
             bat 'docker build -t kidscounsileracr.azurecr.io/kidcounsiler .'
            }
           }     
        stage("ImagePushToDockerHub"){
           steps{

                bat 'docker login kidscounsileracr.azurecr.io -u kidscounsileracr -p '
                bat 'docker push kidscounsileracr.azurecr.io/kidcounsiler'
           }       
         }
          stage("DeployApplicationInAKS"){
           steps{

                  withKubeConfig(caCertificate: '', clusterName: '', contextName: '', credentialsId: 'K8', namespace: '', restrictKubeConfigAccess: false, serverUrl: '') {
                        // bat 'kubectl delete deployment kidscounsiler-deployment'
                        bat 'kubectl apply -f  aks-deploy-from-acr.yaml '
                  }
               
                
           }       
         }
    }
}
