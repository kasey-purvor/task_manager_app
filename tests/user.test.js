const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const user1Id = new mongoose.Types.ObjectId() 

const user1 = new User({
    _id: user1Id,
    email: "test.user@gmail.com",
    name: "Name",
    password: "atlas123",
    tokens: [{
        token: jwt.sign({_id: user1Id}, process.env.JSON_WEB_TOKEN_KEY)
    }]
})


beforeEach( async() => {
    await User.deleteMany({})
    await new User(user1).save()
})

afterEach(async() => {
    await User.deleteMany({})
})

describe("user route testing",  () => {
    test("Should sign up a new user" , async () => {
        const response = await request(app).post('/users')
            .send({
                name: "Jasey",
                email:"wames.dyson@gmail.com",
                password: "atlas123",
                age: 22
            })
            .expect(201)
        
        // assertions about the response
            // tests that the test user has been uploaded    
        const user = await User.findOne({_id: response.body.user._id})
        expect(user).not.toBeNull()     
        expect(response.body).toMatchObject({
            user: {
                name: "Jasey",
                email:"wames.dyson@gmail.com",
                age: 22
            }
        })
        expect(response.body.token).toMatchObject({
            token: user.tokens[0].token
        })
        expect(user.password).not.toBe("atlas123")
    })
    
    test("Should login existing user", async () => { // this will just test login not auth
        const response = await request(app).post('/users/login')
            .send({
                email: user1.email,
                password: "atlas123"
            })
            .expect(200)
        const user = await User.findOne({_id: user1._id})
        expect(user).not.toBeNull()
        expect(response.body.token).toMatchObject({
            token: user.tokens[1].token
        })
    })
    
    test("Login failure due to non-existing account", async() => {
        await request(app).post('/users/login')
            .send({
                email: "unknown,user@gmail.com",
                password: "non-password"
            })
            .expect(400)
    })

    test("Should get profile for authenticated user", async () => {
        await request(app).get('/users/me')
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .send()
            .expect(200)
    })

    test("Should not get profile for unauthenticated user", async () => {
        await request(app).get('/users/me')
            .send()
            .expect(401)
    })

    test("Should allow authenticated user to delete account", async () => {
        await request(app).delete('/users/me')
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .send()
            .expect(200)
        const user = await User.findOne({_id: user1._id})
        expect(user).toBeNull()
    })

    test("Should NOT allow user to delete account if not autherized", async () => {
        await request(app).delete('/users/me')
            .send()
            .expect(401)
    })
    
    test("should upload avatar image", async () => {
        await request(app).post('/users/me/avatar')
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .attach("avatar", "./tests/fixtures/test.jpg")
            .expect(200)
        const user = await User.findOne({_id: user1._id})
        expect(user.avatar).toEqual(expect.any(Buffer))
    })

    test("Should update user fields", async () => {
        await request(app).patch('/users/me')
            .set("Authorization", `Bearer ${user1.tokens[0].token}`)
            .send({
                name: "Kasey",
                age: 25
            })
            .expect(200)
        const user = await User.findOne({_id: user1._id})
        expect(user.name).toEqual("Kasey")
        expect(user.age).toEqual(25)
    })

    test("Should not update invalid fields", async () => {
        await request(app).patch('/users/me')
            .set("Authorization", `Bearer ${user1.tokens[0].token}`)
            .send({
                "Names": "Kasey",
                "agehs": 25
            })
        const user = await User.findOne({_id: user1._id})
        expect(user.names && user.agehs).toBeUndefined()
    })

})
