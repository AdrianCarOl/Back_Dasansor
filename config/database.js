const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "dasansor";

exports.mongoConnect = () => {
    //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    const mongoStringConnection = `mongo "mongodb://mongo:PKo7F0i3nCipiVQsZ8G0@containers-us-west-23.railway.app:5733"`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb conection error"))


}