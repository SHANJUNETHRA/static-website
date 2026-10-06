pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'docker build -t shanjunethra/mywebsite:latest .'
            }
        }
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'U', passwordVariable: 'P')]) {
                    bat 'echo %P%| docker login -u %U% --password-stdin'
                    bat 'docker push shanjunethra/mywebsite:latest'
                }
            }
        }
        stage('Run') {
            steps {
                bat 'docker rm -f mywebsite || exit /b 0'
                bat 'docker run -d --name mywebsite -p 8081:80 shanjunethra/mywebsite:latest'
            }
        }
    }
}