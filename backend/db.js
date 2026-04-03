const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('database okay');
    } catch (err){
        console.log('database not okay'+err);
        }
}

module.exports = connectDB;