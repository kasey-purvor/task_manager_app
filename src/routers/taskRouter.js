const express = require('express')
require('../db/mongoose')
const Task = require('../models/task')
const router = express.Router()
const auth = require('../middleware/authentication')

router.post('/tasks', auth, (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id // req.user is created in the Auth middleware if you are wondering how that works. 
    })
    async function saveTask() {
        try {
            await task.save();
            console.log("Task Saved");
            res.status(201).send(task)
        } catch(error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
    saveTask()
})

// sort=field_asc
router.get('/tasks', auth, async (req, res) => { 
    const match = {}
    const sort = {}
    
    if (req.query.completed) {
        match.completed = req.query.completed === "true"
    }
    if(req.query.sort) {
        const sort_def = req.query.sort.split("_")
        sort[sort_def[0]] = sort_def[1] === "asc" ? 1 : -1
        console.log(sort)
    } 
    try {
        // const tasks = await Task.find({
        //     owner: req.user._id,
        //     completed: match.completed
        // })
        // res.status(200).send(tasks)
        // orrr you could use the new ref property from mongoose
        await req.user.populate({
            path : 'tasks',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
    })
        res.status(200).send(req.user.tasks)

    } catch (e){
        res.status(400).send(e)
    }
})

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findOne({_id, owner: req.user._id})
        if (!task) {
            return res.status(404).send("task not found")
        }
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        const task = await Task.findOne({_id: req.params.id, owner: req.user._id })
        if (!task) {
            return res.status(404).send("no task found")
        }
        updates.forEach(update => {
            task[update] = req.body[update]
        })
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        const task = await Task.findOne({_id: req.params.id, owner: req.user._id})
        if (!task) {
            return res.status(404).send("task not found")
        }
        await task.remove()
        res.status(302)
        res.send("task Removed")
        
    } catch (e) {
        res.send(e)
    }
})

module.exports = router