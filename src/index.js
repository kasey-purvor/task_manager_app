const express = require("express");
require("./db/mongoose"); // this just brings on the mongoose connetion to mongo. without it you cant save
const taskRouter = require('./routers/taskRouter')
const userRouter = require('./routers/userRouter')
const Task = require('./models/task')
const User = require('./models/user')

const app = express();
const port = process.env.PORT 

app.use(express.json()); // makes express auto parse JSON in the body of the request
app.use(taskRouter)
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

const run = async () => {
    const task = await Task.findById('640b00a203bd609291e38369')
    await task.populate('owner') // in the tutorial execPopulate has now been remvoedfrom mongoose 
    console.log(task.owner)

    const user = await User.findById('640af33aa5d5bc1cd60f266e')
    await user.populate('tasks')
    console.log(user.tasks)
}

// run()