const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../.env' });

const db = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres",
    logging: Number(process.env.DB_LOGGING) ? true : false,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    typeValidation: true,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
}

const uat = {
  dialectOptions: {
    ssl:{
      require: true, 
      rejectUnauthorized: false 
    }
  },
  ...db
}

module.exports = {
    development: db,
    uat: uat,
    production: db,
}