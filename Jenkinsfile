pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
        DEPLOY_PATH = '/var/www/jagdevops.com'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION} || nvm install ${NODE_VERSION}
                    npm ci
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm use ${NODE_VERSION}
                    npm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    sudo rm -rf ${DEPLOY_PATH}/*
                    sudo cp -r build/* ${DEPLOY_PATH}/
                    sudo chown -R www-data:www-data ${DEPLOY_PATH}
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
