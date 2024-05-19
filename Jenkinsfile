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
}
}