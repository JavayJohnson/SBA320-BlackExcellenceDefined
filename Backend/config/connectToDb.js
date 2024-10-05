
require('dotenv').config();
const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
      
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection error: ", error);
        process.exit(1); 
    }
};

module.exports = connectToDb;
