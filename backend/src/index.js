const server = require('./app')
const port = process.env.PORT 

server.listen(port, () => {
    console.log(`Backend server is running on port ${port}`)
})
