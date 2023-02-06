require("dotenv").config()

module.exports = {
    // HOST: "localhost",
    // PORT: 27017,
    // DB: "green_aadhaar_db",
    PATH: process.env.MONGO_SERVER_PATH
};