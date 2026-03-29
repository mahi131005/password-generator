pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/mahi131005/password-generator.git'
            }
        }

        stage('Build') {
            steps {
                echo "No build required"
            }
        }

        stage('Test') {
            steps {
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker rm -f web || true
                docker run -d -p 8081:80 --name web \
                -v $(pwd):/usr/share/nginx/html nginx
                '''
            }
        }
    }
}
