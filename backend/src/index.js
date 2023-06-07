const server = require('./app')
const port = process.env.PORT 
if (process.env.DEV ==="true") {
    const ip = process.env.BACKEND_IP
    server.listen(port, ip, () => {
        console.log(`Backend server is running on port ${port}`)
    })
} else {
    server.listen(port, () => {
        console.log(`Backend server is running on port ${port}`)
    })
}
