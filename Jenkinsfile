pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo "No build required for static website"
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
