import dotenv from 'dotenv';

import {validator} from './validator';
import {envVarsSchema} from './schemas';

// ENVIRONMENT VARIABLES
dotenv.config({ path: __dirname + '/../../.env'});

export function env(){
    const envVars = {
        port: Number(process.env.API_PORT),
        host: process.env.API_HOST,
        project: process.env.PROJECT_NAME,
        scheme: process.env.API_SCHEME,
        version: process.env.API_VERSION,
        environment: process.env.NODE_ENV,
    
        dbUser: process.env.DB_USER,
        dbPassword: process.env.DB_PASSWORD,
        dbPort: Number(process.env.DB_PORT),
        dbHost: process.env.DB_HOST,
        dbName: process.env.DB_NAME,

        fastify: Number(process.env.FASTIFY),
    }
    
    
    const validateEnv = validator(envVarsSchema, envVars)
    if (!validateEnv.valid) {
        console.log(validateEnv.data);
        process.exit(1);
    }

    return envVars
}

