pipeline {
    agent any

    environment {
        APP_PATH = '/home/jaime/apps/JAIME-GABRIELS-PORTFOLIO-WEBSITE'
        CONTAINER_NAME = 'jagdevops-portfolio'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Pull Latest') {
            steps {
                sh '''
                    cd ${APP_PATH}
                    git stash || true
                    git pull origin master
                '''
            }
        }

        stage('Build with Docker') {
            steps {
                sh '''
                    docker run --rm \
                        -v ${APP_PATH}:/app \
                        -w /app \
                        node:18-alpine \
                        sh -c "npm install && npm run build"
                '''
            }
        }

        stage('Restart Container') {
            steps {
                sh '''
                    docker restart ${CONTAINER_NAME}
                '''
            }
        }
    }

    post {
        success {
            echo 'Portfolio deployed successfully to jagdevops.com'
        }
        failure {
            echo 'Deployment failed'
        }
    }
}
