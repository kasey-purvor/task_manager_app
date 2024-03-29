const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");
const Task = require("../models/task");
const { sendWelcomeEmail, sendGoodbyeEmail } = require("../emails/account");
const auth = require("../middleware/authentication");
const multer = require("multer");
const sharp = require("sharp"); // sharp is used to alter image properties such as format and size.
const Cookies = require("cookies");

//upload user avatar, multer allows you to attach images and other files to the req object or save to the file system
const upload = multer({
    // dest: 'avatars', // this overides the default of multer, which is attaching the upload to the req object.
    limits: {
        filesize: 4000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.endsWith(".jpg" || ".jpeg" || "png")) {
            return cb(new Error("Please provide png, jpg, or jpeg filetype"));
        }
        cb(undefined, true);
    },
});
//upload user avatar
userRouter.post(
    "/api/users/me/avatar",
    auth,
    upload.single("avatar"),
    async (req, res) => {
        const buffer = await sharp(req.file.buffer).resize(250, 250).png().toBuffer();
        req.user.avatar = buffer;
        await req.user.save();
        res.status(200).send();
    },
    (error, req, res, next) => {
        res.status(400).send({ error: error.message }), next();
    }
);
// user avatar is shown in an image html tag: <img src="data:image/jpg;base64,/binary > "

// delete user avatar
userRouter.delete("/api/users/me/avatar", auth, async (req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.status(200).send();
});

// acces specific user avatar
userRouter.get("/api/users/:id/avatar", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user || !user.avatar) {
            throw new Error("Error with somehting ");
        }
        res.set("content-type", "image/jpg"); // express sets this to 'application/json' but when something else it needs to be set
        res.send(user.avatar);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

//post new user
userRouter.post("/api/users", async (req, res) => {
    const user = new User(req.body); // creating a mongoose model object, so body will be validated/sanitised
    try {
        await user.save();
        const token = await user.generateAuthTokenAndSaveToUser();
        // res.cookie("jwt", token.token, {
        //     httpOnly: true,
        //     sameSite: "lax",
        //     // secure: true,
        //  });
        
        // sendWelcomeEmail(req.body.name, req.body.email);
        console.log("User Signup Successfull");
        res.status(201).send({token, user});
    } catch (error) {
        console.log("User Singup failed",error)
        res.status(400).send(error);
    }
});
//login user
userRouter.post("/api/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthTokenAndSaveToUser();

        // res.cookie("auth-token", token.token, {
        //     httpOnly: true,
        //     sameSite: "none",
        //     // secure: true,
        //     // domain: "localhost",
        //     // path: "/",
        //  });
        //  console.log(token.token)
        console.log("User SignIn Successfull");
        res.status(200).send({token, user});
    } catch (e) {
        console.log("User SingIn failed: ", e.message)
        res.status(400).send({ "error": e });
    }
});
//logout user !! have discontinued as logout may as well logout the user from all devices as http-only cookies are session only 
// userRouter.post("/api/users/logout", auth, async (req, res) => {
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return req.token !== token.token;
//         });
//         req.user.save();
//         res.send("logged out");
//     } catch (e) {
//         res.status(500).send();
//     }
// });

userRouter.post("/api/users/logout", auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        const user = req.user
        console.log("user successfully logged out")
        res.clearCookies();
        res.status(200).send({user});
    } catch (e) {
        res.status(500).send(e);
    }
});

userRouter.get("/api/users/me", auth, async (req, res) => {
    res.status(200).send(req.user);
});

// find and update user
userRouter.patch("/api/users/me", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        updates.forEach((update) => {
            req.user[update] = req.body[update];
        });
        await req.user.save();
        res.send(req.user);
        console.log("User updated successfully", req.body);
    } catch (e) {
        console.log("User update failed", e.message);
        res.send(e);
    }
});
// find and delete Users
userRouter.delete("/api/users/delete", auth, async (req, res) => {
    try {
        await req.user.remove();
        // sendGoodbyeEmail(req.user.name, req.user.email);
        // await Task.deleteMany({owner: req.user._id}) // this has been replaced my mongoose middleware.
        console.log("User deleted successfully");
        res.send({});
    } catch (e) {
        res.send(e);
    }
});

module.exports = userRouter;
