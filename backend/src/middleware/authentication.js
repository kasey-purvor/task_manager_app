const jwt = require('jsonwebtoken');
const User = require('../models/user')
const Cookies = require('cookies')
const auth = async (req, res, next) => {
    try {
        const cookies = new Cookies(req, res);
        console.log("auth middleware called. Req Headers: ", req.headers)
        const token = await req.headers["auth-token"]
        // console.log("attempt to authenticate with:", token)
        const decoded = await jwt.verify(token, process.env.JSON_WEB_TOKEN_KEY )
        // console.log("decoded", decoded) 
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        if(!user) {
            throw new Error("something went wrong")
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        console.log("auth error", e)
        res.status(401).send(e)
    }
}
module.exports = auth 