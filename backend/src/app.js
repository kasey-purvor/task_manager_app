const express = require("express");
require("./db/mongoose"); // this just brings on the mongoose connetion to mongo. without it you cant save
const taskRouter = require('./routers/taskRouter')
const userRouter = require('./routers/userRouter')

const app = express();
const port = process.env.PORT 
app.options('/tasks/:id', (req, res) => {
    // Set CORS headers for preflight request
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE. PATCH');
    res.header('Access-Control-Allow-Headers', 'Authorization');
  
    // Respond with 204 No Content
    res.sendStatus(204);
  });

app.use(express.json()); // makes express auto parse JSON in the body of the request
app.use(taskRouter)
app.use(userRouter)

module.exports = app
