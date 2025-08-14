const mongoose = require("mongoose");

const dburl = 'mongodb+srv://Gouri19:Gouri03@cluster0.ydwol.mongodb.net/'
const connectDB = async () => {
    try {
        await mongoose.connect(dburl); // Remove useUnifiedTopol
        console.log(" MongoDB connected successfully");
    }catch(err) {
        console.log(" MongoDB connection error",err);
        process.exit(1); // Exite proccess if connection fails
    }
};

module.exports = connectDB;