const express = require('express')
const userRouter = express.Router()
require('../db/mongoose')
const User = require('../models/user')
const Task = require('../models/task')
const auth = require('../middleware/authentication')
const multer = require('multer')

//upload user avatar
const upload = multer({
    // dest: 'avatars', // this overides the default of multer, which is attaching the upload to the req object. 
    limits: {
        filesize: 4000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.endsWith('.jpg' || '.jpeg' || 'png')) {
            return cb(new Error("Please provide png, jpg, or jpeg filetype"))
        }
        cb(undefined, true)
    }
})
userRouter.post('/users/me/avatar', auth,  upload.single("avatar"), async (req, res) => {
    req.user.avatar = req.file.buffer
    await req.user.save()
    res.status(200).send()
}, (error, req, res, next) => {
    res.status(400).send({"error" : error.message }),
    next()
})

userRouter.delete('/users/me/avatar', auth, async(req,res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.status(200).send()
})

//post new user
userRouter.post("/users", (req, res) => {
    const user = new User(req.body); // creating a mongoose model object, so body will be validated/sanitised 
    async function saveUser() {
        try {
            await user.save()
            const token = await user.generateAuthToken()
            res.status(201).send({user, token})
        } catch(error) {
            res.status(400).send(error)
        }
    }
    saveUser()
})
//login user 
userRouter.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken() // user should not be here
        res.status(200).send({user, token})
    } catch(e) {
        res.status(400).send(e)
    }
    
})

userRouter.post('/users/logout', auth, async (req, res) => {
    try {
         req.user.tokens = req.user.tokens.filter((token) => {
            return req.token !== token.token
         })

         req.user.save()
         res.send("logged out")
    } catch(e) {
        res.status(500).send()
    }
})

userRouter.post('/users/logoutall', auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send("logged out of all devices")
    } catch(e) {
        res.status(500).send(e)
    }
})

userRouter.get('/users/me', auth, async (req, res) => {  
    res.status(200).send(req.user)
})


// find and update user
userRouter.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        updates.forEach(update => {
            req.user[update] = req.body[update]
        })
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.send(e )
    }
})
// find and delete Users
userRouter.delete('/users/me', auth,  async (req, res) => {
    try {
        await req.user.remove()
        // await Task.deleteMany({owner: req.user._id}) // this has been replaced my mongoose middleware. 
        res.send("user deleted")
    } catch(e) {
        res.send(e)
    }
})

module.exports = userRouter