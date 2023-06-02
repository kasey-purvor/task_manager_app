const mongoose = require('mongoose');
const validator = require('validator');
const taskSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
            default: "No description provided"
        },
        completed: {
            type: Boolean,
            default: false
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true ,
            ref: 'User' // this stands for reference and will fill the field with the entire 'user' related 
        },
        due: {
            type: Date,
            required: false
        }   
    },
    {
        timestamps: true
    }
)


const Task = mongoose.model("Task", taskSchema)

module.exports = Task