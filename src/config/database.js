const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://nirbhaykumarsaini:2AQEJ2qm1YqcY1Rk@namastenode.0mzya.mongodb.net/devTinder"
    );
};


module.exports = { connectDB };