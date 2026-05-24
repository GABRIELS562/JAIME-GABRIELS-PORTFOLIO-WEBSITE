pipeline {
    agent any

    environment {
        DEPLOY_PATH = '/home/jaime/apps/JAIME-GABRIELS-PORTFOLIO-WEBSITE/build'
        CONTAINER_NAME = 'jagdevops-portfolio'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Build with Docker') {
            steps {
                sh '''
                    docker run --rm \
                        -v ${WORKSPACE}:/app \
                        -w /app \
                        node:18-alpine \
                        sh -c "npm install && npm run build"
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    sudo rm -rf ${DEPLOY_PATH}/*
                    sudo cp -r ${WORKSPACE}/build/* ${DEPLOY_PATH}/
                    sudo chown -R jaime:jaime ${DEPLOY_PATH}
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
