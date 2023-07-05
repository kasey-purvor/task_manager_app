const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: Number,
            // required: true,
            default: 0,
            validate(value) {
                if (value < 0) {
                    throw new Error("Age must be a positive number")
                }
            }
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            // lowercase: true,
            // validate(value) { // this is a custom validator 
            //     if (!validator.isEmail(value)) { // here the npm validator is used to check for valid emails 
            //         throw new Error("Email is invalid");
            //     }
            // }
        },
        password: {
            type: String,
            required: true,
            trim: true,
            // minLength: 6,
            // validate(value) {
            //     if (value.toLowerCase().includes("password")) {
            //         throw new Error("Password cannot contain the word 'password'")
            //     }
            // }
        },
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }],
        avatar: {
            type: Buffer
        }
    },
    {
        strict: 'throw',
        timestamps: true,
        
    }
)

//set schema options
userSchema.set('validateBeforeSave', true)
// virtual relationships

userSchema.virtual('tasks', { // tasks is the name of the virtual field 
    ref: 'Task', // this is the mongoose model name declared in the Task model 
    localField: '_id', // user field
    foreignField: 'owner' // task field
})

//middleware and exported functions 

//delete user tasks when the user is removed
userSchema.pre('remove', async function ( next ) {
    const user = this;
    await Task.deleteMany({owner: user._id})
    next()
})

// this simply changes any passwords saved into hashed instead of text. It applies when any psswork is saved
userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
// this is called whenever something is JSON'ed, ie just before something is sent back to the client. It removes sensitive information on the res.send call.
userSchema.methods.toJSON = function() {
    const user = this.toObject()

    // delete user.tokens
    delete user.password
    delete user.avatar
    return user
}
// this looks for a existing user
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})  
    if (!user) {
        throw new Error("email does not exist")
    } else if (await !bcrypt.compare(password, user.password)) {
        throw new Error("password is incorrect")
    } else {
        return user 
    }
}
//generate JSON web token 
userSchema.methods.generateAuthTokenAndSaveToUser = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id}, process.env.JSON_WEB_TOKEN_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return {token}
}


const User = mongoose.model("User", userSchema)

module.exports = User
