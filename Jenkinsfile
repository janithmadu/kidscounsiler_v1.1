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
             bat 'docker build -t kidscounsileracr/kidcounsiler .'
            }
           }     
        stage("ImagePushToDockerHub"){
           steps{

                bat 'docker login kidscounsileracr.azurecr.io -u kidscounsileracr -p qRwJDwr9Jj884+MDqKwB7pD2vi3Ml0x0Rpzq4AeB3X+ACRAnlRMX'
                bat 'docker push kidscounsileracr/kidcounsiler'
           }       
         }
    }
}