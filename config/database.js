const mongoose = require("mongoose");

//const host = "localhost";
const host = "bddasansor.fggb4og.mongodb.net";
const port = "27017";
const db = "dasansor";

exports.mongoConnect = () => {
    //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    const mongoStringConnection = `mongodb+srv://AdrianBD:<password>@bddasansor.fggb4og.mongodb.net`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb conection error"))


}