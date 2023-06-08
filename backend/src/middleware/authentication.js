const jwt = require('jsonwebtoken');
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
 
        const decoded = jwt.verify(token, process.env.JSON_WEB_TOKEN_KEY ) 
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
               console.log(req.cookies)
        if(!user) {
            throw new Error("something went wrong")
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(403).send(e)
    }
}
module.exports = auth 