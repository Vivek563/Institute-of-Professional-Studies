const mongoose = require("mongoose");

const { MONGODB_URL } = process.env;

exports.connect = ()  => {

    mongoose.connect(MONGODB_URL);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Database connected");
    });

};