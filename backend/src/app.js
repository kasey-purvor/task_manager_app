const express = require("express");
require("./db/mongoose"); // this just brings on the mongoose connetion to mongo. without it you cant save
const taskRouter = require("./routers/taskRouter");
const userRouter = require("./routers/userRouter");
const cookieParser = require("cookie-parser");
const https = require("https");
// const {createProxyMiddleware} = require("http-proxy-middleware");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT;
console.log("This is the backened ROOT", process.cwd());

app.options("/tasks/:id", (req, res, next) => {
    // Set CORS headers for preflight request
    res.header("Access-Control-Allow-Origin", "https://localhost:3001");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");

    // Respond with 204 No Content
    res.sendStatus(204);
});
// app.options('/users/', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://localhost:3001");
//     res.header("Access-Control-Allow-Methods", "GET, POST, DELETE,PATCH");
//     res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");

// })
// app.options('/users/login', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://localhost:3001");
//     res.header("Access-Control-Allow-Methods", "POST");
//     res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");

// })
app.use(cors({
        origin: "*",
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json()); // makes express auto parse JSON in the body of the request
app.use(taskRouter);
app.use(userRouter);

module.exports = app;
