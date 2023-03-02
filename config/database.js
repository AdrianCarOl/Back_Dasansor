const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "dasansor";
const BASE_URL = process.env.BASE_URL;

exports.mongoConnect = () => {
   // const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
   const mongoStringConnection = `mongodb://$:{BASE_URL}${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb conection error"))


}