const mongoose = require("mongoose");

//const host = "localhost";
const DB_USER = "mongo";
const DB_PASSWORD = "PKo7F0i3nCipiVQsZ8G0";
const API_VERSION = "V1";
const IP_SERVER = "localhost";
const host = "mongodb://mongo:PKo7F0i3nCipiVQsZ8G0@containers-us-west-23.railway.app:5733";
const port = "5733";
const db = "dasansor";

/*
module.exports = {
    DB_USER,
    DB_PASSWORD,
    API_VERSION,
    IP_SERVER,
    host,
};  

const{
    DB_USER,
    DB_PASSWORD,
    API_VERSION,
    IP_SERVER,
    host,
} = require("./database");    */

exports.mongoConnect = () => {
    //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    const mongoStringConnection = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${host}/`;
    (error) => {
        if (error) throw error;
        console.log("La conexion a la base de datos ha sido exitosa");
    }


    
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb conection error"))
   
};