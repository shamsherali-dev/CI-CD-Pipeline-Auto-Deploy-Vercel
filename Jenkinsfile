pipeline{
    agent any 

    environment{
        VERCEL_TOKEN=credentials("vercel_token");
    }

    stages{
        stage("install"){
            steps{
                bat 'npm install'
            }
        }
        stage(" test"){
            steps{
                echo 'skip the testing .....'
            }
        }
        stage("bulid"){
            steps{
                bat 'npm run build'
            }
        }
        stage("Deploy"){
            steps{
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
            }
        }
    }
}