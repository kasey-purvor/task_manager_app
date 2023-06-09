const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectionString = process.env.MONGODB_TASK_COLLECTION_STRING
try{
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to MongoDB", connectionString)
    })
} catch(err){
    console.log("Error Connecting to MongoDB", err)
} 

module.exports = mongoose


