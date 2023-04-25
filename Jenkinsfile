pipeline {
    agent {label "agent1"}
    environment {
        GIT_URL = 'https://github.com/PabloR9080/sicei_devops.git'
        GIT_BRANCH = 'main'
    }
    stages {
        stage('Clone') {
            steps {
                sh "git clone $GIT_URL"
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
               sh 'npm run test'
            }
        }
        stage('Docker') {
            steps {
                // docker build -t sicei-devops#Build:branch .
                sh 'docker build -t sicei-$GIT_BRANCH:1.0.0-$BUILD_NUMBER .'
            }
        }
        stage('Run Docker'){
            steps{
                // stop all containers 
                // docker stop $(docker ps -a -q)
                // docker run -d -p 8080:8080 sicei-devops#Build:branch
                sh 'docker stop $(docker ps -a -q)'
                sh 'docker run -d -p 3000:3000 sicei-$GIT_BRANCH:1.0.0-$BUILD_NUMBER'
            }
        }
    }
}
