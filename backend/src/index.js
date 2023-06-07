const server = require('./app')
const port = process.env.PORT 
const ip = process.env.BACKEND_IP
server.listen(port, ip, () => {
    console.log(`Backend server is running on port ${port}`)
})
