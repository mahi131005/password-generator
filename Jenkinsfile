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

                # Fix permissions so Nginx can read files
                chmod -R 755 .

                # Run Nginx container and mount project files
                docker run -d -p 8081:80 --name web \
                -v $(pwd):/usr/share/nginx/html:ro nginx
                '''
            }
        }
    }
}
