const express = require("express");
// require('../db/mongoose')
const Task = require("../models/task");
const taskRouter = express.Router();
const auth = require("../middleware/authentication");

// inital routes to allow vercel build
taskRouter.get("/api/allTasks", async (req, res) => {
    try {
        const allTasks = await Task.find({});
        console.log("dynamic page is collecting all tasks");
        // console.log(allTasks)
        res.status(200).send(allTasks);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});
// inital routes to allow vercel build
taskRouter.get("/api/getTask/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOne({ _id: _id });
        if (!task) {
            return res.status(404).send("task not found");
        }
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});
taskRouter.post("/api/tasks", auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id, // req.user is created in the Auth middleware if you are wondering how that works.
    });
    const cookie = req.cookies;
    try {
        await task.save();
        console.log("task saved successfully");
        res.status(201).send(task);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

// sort=field_asc
taskRouter.get("/api/tasks", auth, async (req, res) => {
    const match = {};
    const sort = {};
    if (req.query.completed) {
        match.completed = req.query.completed === "true";
    }
    if (req.query.sort) {
        const sort_def = req.query.sort.split("_"); // this param needs the fieldTosort_asc or fieldTosort_desc
        sort[sort_def[0]] = sort_def[1] === "asc" ? 1 : -1;
    }
    try {
        // console.log("get all tasks route called");
        // const tasks = await Task.find({
        //     owner: req.user._id,
        //     completed: match.completed
        // })
        // res.status(200).send(tasks)
        // orrr you could use the new ref property from mongoose
        await req.user.populate({
            path: "tasks",
            match, // populate is useful here as it allows req's without a "completed" param. It returns all tasks instead of giving errors
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort,
            },
        });
        console.log("got all Tasks successfully");
        res.set("content-type", "application/json; charset=utf-8");
        // console.log(res.getHeaders());
        res.status(200).send(req.user.tasks);
    } catch (e) {
        console.log("getAllTasks failed", e);
        res.status(400).send(e);
    }
});

taskRouter.get("/api/tasks/:id", auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOne({ _id, owner: req.user._id });
        if (!task) {
            return res.status(404).send("task not found");
        }
        console.log("got specific task successfully");
        res.set("content-type", "application/json; charset=utf-8");
        // console.log(res.getHeaders());
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

taskRouter.patch("/api/tasks/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
        if (!task) {
            return res.status(404).send("no task found");
        }
        updates.forEach((update) => {
            task[update] = req.body[update];
        });
        await task.save();
        console.log("updated task successfully");
        res.status(201).send(task);
    } catch (e) {
        res.send(e);
    }
});

taskRouter.delete("/api/tasks/:id", auth, async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
        if (!task) {
            return res.status(404).send("task not found");
        }
        await task.remove();
        console.log("deleted task successfully");
        res.status(302);
        res.send({ message: "task Removed"});
    } catch (e) {
        res.send(e);
    }
});

module.exports = taskRouter;
