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
        
                # Create temporary Dockerfile
                cat <<EOF > Dockerfile
                FROM nginx:alpine
                COPY . /usr/share/nginx/html
                EOF
        
                # Build custom image
                docker build -t my-static-app .
        
                # Run container
                docker run -d -p 8081:80 --name web my-static-app
                '''
            }
        }
    }
}
