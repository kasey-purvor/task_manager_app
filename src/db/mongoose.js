const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_TASK_COLLECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = mongoose


