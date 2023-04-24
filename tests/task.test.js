const request = require('supertest')
const Task = require('../src/models/task')
const app = require('../src/app')
const {user1Id, user1, setupDatabase} = require('./fixtures/testDB')

beforeEach(setupDatabase) // not sure why setupDatabase() caused errors here? ? ? 

describe("task route testing",  () => {
    
    test("Should create a new task", async () => {
        const response = await request(app)
            .post('/tasks')
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .send({
                description: "Test task",
                completed: false
            })
            .expect(201)
        const task = await Task.findOne({_id: response.body._id})
        expect(task.description).toEqual("Test task")
    })

    



})
