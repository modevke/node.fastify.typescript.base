// PROJECT VARIABLES
def FAILED_STAGE
def projectFolder="notification.tospay.net"
def projectBranch="uat"

// GIT VARIABLES
def gitUser="Moses.Odhiambo"
def gitUserKey="LLyyTmJw_EZ8USLDpx4C"
def gitRepoUrl="gitlab.com/tospay1/notification.tospay.net.git"

// DOCKER VARIABLES
def dockerBuildPort="8040"
def dockerBuildHost=" 178.62.126.78"
def dockerBuildProjectName="notification-service"
def dockerBuildApiVersion="0.0.0.1"
def dockerBuildApiScheme="http"
def dockerBuildNodeEnv="uat"
def dockerBuildEnv="notificationuatbuild"

// DB VARIABLES
def dockerDbUser="devuser"
def dockerDbPassword="nqks0hkuewm0a329"
def dockerDbPort="25060"
def dockerDbHost="tosnetdb-tospay-net-do-user-8478783-0.b.db.ondigitalocean.com"
def dockerDbName="notification_uat_db"

def dockerFastify="1"

// DEPLOYMMENT VARIABLES
def deploymentPort="8040:8040"

pipeline {
    agent any
    stages {
        stage('--clone--') {
            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                    echo "Cloning stage"
                }
                // REMOVE PREVIOUS FILE
                sh "rm -rf ${projectFolder}"
                // CLONE PROJECT
                sh "git clone --single-branch --branch ${projectBranch} https://${gitUser}:${gitUserKey}@${gitRepoUrl} && cd ${projectFolder} && ls -la"
            }
        }
        // stage('--test--') {
        //   
        // }
        stage('--build--') {
            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                    echo "Build stage"
                }
                // CREATE BUILD ENVIRONMENT VARIABLES
                sh "cd ${projectFolder} && touch .env && echo 'API_PORT=${dockerBuildPort}\nAPI_HOST=${dockerBuildHost}\nPROJECT_NAME=${dockerBuildProjectName}\nAPI_VERSION=${dockerBuildApiVersion}\nAPI_SCHEME=${dockerBuildApiScheme}\nNODE_ENV=${dockerBuildNodeEnv}\nDB_USER=${dockerDbUser}\nDB_PASSWORD=${dockerDbPassword}\nDB_PORT=${dockerDbPort}\nDB_HOST=${dockerDbHost}\nDB_NAME=${dockerDbName}\nFASTIFY=${dockerFastify}\nDOCKER_ENV=${dockerBuildEnv}' > .env && ls -la && cat .env"
                // BUILD APP
                sh "cd ${projectFolder} && docker-compose -f docker-compose-build.yml build"
            }
        }
        stage('--run--') {
            steps {
                script {
                    FAILED_STAGE=env.STAGE_NAME
                    echo "Run stage"
                }
                sh "cd ${projectFolder} && docker container stop ${dockerBuildEnv} && docker container rm ${dockerBuildEnv} &&  docker run --name ${dockerBuildEnv} -p ${deploymentPort} -dit --restart unless-stopped ${dockerBuildEnv} && docker container ls"
            }
        }
    }
    // post {
    //     // WILL ALWAYS RUN AFTER PIPELINE COMPLETES
    //     // always {}
    //     // RUNS ON SUCCESS
    //     // success{}
    //     // RUNS ON FAILURE
    //     // failure{}
    //     // RUNS IF ITS MARKED UNSTABLE
    //     // unstable{}
    //     // RUNS WHEN STATE OF PIPELINE CHANGED
    //     // changed{}
    // }
}
