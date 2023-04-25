pipeline {
    agent {label "agent1"}

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Docker') {
            steps {
                // docker build -t sicei-devops#Build:branch .
                echo 'Building dockerfile!!ñ....'
            }
        }
        stage('Run Docker'){
            steps{
                // stop all containers 
                // docker stop $(docker ps -a -q)
                // docker run -d -p 8080:8080 sicei-devops#Build:branch
                echo 'Running dockerfile!!ñ....'
            }
        }
    }
}
