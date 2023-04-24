const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const user1Id = new mongoose.Types.ObjectId() 
const user1 = {
    _id: user1Id,
    email: "test.user@gmail.com",
    name: "Name",
    password: "atlas123",
    tokens: [{
        token: jwt.sign({_id: user1Id}, process.env.JSON_WEB_TOKEN_KEY)
    }]
}
const task1 = {
    description: "Test task",
    completed: false,
    owner: user1Id
}

const setupDatabase = async () => {
    await User.deleteMany({})
    await Task.deleteMany({})
    await new User(user1).save()
    await new Task(task1).save()
}

module.exports = {
    user1Id,
    user1,
    setupDatabase
}