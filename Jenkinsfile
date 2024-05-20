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

                bat 'docker login -u janithmadu281@gmail.com -p Asdalink@555'
                bat 'docker push ja333/kidcounsiler'
           }       
         }
    }
}