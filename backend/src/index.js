const server = require('./app')
const port = process.env.PORT 

server.listen(3000, () => {
    console.log(`Backend server is running on port ${port}`)
})
