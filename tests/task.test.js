const request = require('supertest')
const Task = require('../src/models/task')
const app = require('../src/app')
const {user1Id, user1, user2Id, user2, task1, task2, task3, setupDatabase} = require('./fixtures/testDB')

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

    test("Should get all tasks for a user", async () => {
        const response = await request(app)
            .get('/tasks')
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            // .set('sort', 'createdAt_desc')
            .send()
            .expect(200)
        expect(response.body.length).toEqual(2)
        expect(response.body[0].description).toEqual("Test task 1")
        expect(response.body[1].description).toEqual("Test task 2")
    })
    
    test("should prevent user2 deleting user1's tasks", async () => {
        await request(app)
            .delete(`/tasks/${task1._id}`)
            .set('Authorization', `Bearer ${user2.tokens[0].token}`)
            .send()
            .expect(404)
        const task = await Task.findOne({_id: task1._id})
        expect(task).not.toBeNull()
        expect(task.description).toEqual("Test task 1")
    })


})
