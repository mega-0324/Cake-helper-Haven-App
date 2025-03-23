pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/mega-0324/Cake-helper-Haven-App.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t megashri0603/cakeshop:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'Docker_Project', url: 'http://localhost:8080/manage/credentials/store/system/domain/_/credential/Docker_Project/']) {
                    sh 'docker push megashri0603/cakeshop:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }
    }
}
