const express = require("express");
require("./db/mongoose"); // this just brings on the mongoose connetion to mongo. without it you cant save
const taskRouter = require('./routers/taskRouter')
const userRouter = require('./routers/userRouter')

const app = express();
const port = process.env.PORT 

app.use(express.json()); // makes express auto parse JSON in the body of the request
app.use(taskRouter)
app.use(userRouter)

module.exports = app
