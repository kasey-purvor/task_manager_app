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
const user2Id = new mongoose.Types.ObjectId() 
const user2 = {
    _id: user2Id,
    email: "test2.user@gmail.com",
    name: "Name2",
    password: "atlas123",
    tokens: [{
        token: jwt.sign({_id: user2Id}, process.env.JSON_WEB_TOKEN_KEY)
    }]
}
const task1 = {
    _id: new mongoose.Types.ObjectId(),
    description: "Test task 1",
    completed: false,
    owner: user1Id
}
const task2 = {
    _id: new mongoose.Types.ObjectId(),
    description: "Test task 2",
    completed: false,
    owner: user1Id
}
const task3 = {
    _id: new mongoose.Types.ObjectId(),
    description: "Test task 3",
    completed: false,
    owner: user2Id
}

const setupDatabase = async () => {
    await User.deleteMany({})
    await Task.deleteMany({})
    await new User(user1).save()
    await new User(user2).save()
    await new Task(task1).save()
    await new Task(task2).save()
    await new Task(task3).save()
}

module.exports = {
    user1Id,
    user1,
    user2Id,
    user2,
    task1,
    task2,
    task3,
    setupDatabase
}