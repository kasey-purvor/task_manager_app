const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/task-manager-app-2022-kp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



