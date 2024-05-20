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
             bat 'docker build -t ja333/kidcounsiler .'
            }
           }     
           stage("ImagePushToDockerHub"){
           steps{

            withCredentials([string(credentialsId: 'DockerHubPass', variable: 'dockerhub')]) {
               

                bat 'docker login -u janithmadu281@gmail.com -p ${dockerhub}'
           
              
            }
           }       
    }

   
    }
}