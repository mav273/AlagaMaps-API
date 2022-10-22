require('dotenv').config({path:__dirname+'/./../../.env'});
require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
            require: true,
            rejectUnauthorized: false,
            },
        },
        logging: false,
        omitNull: true
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,  
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
            require: true,
            rejectUnauthorized: false,
            },
        },
        logging: true
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
            require: true,
            rejectUnauthorized: false,
            },
        },
        logging: false
    }
};
