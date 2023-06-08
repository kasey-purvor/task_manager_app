const server = require('./app')
const port = process.env.PORT 
if (process.env.NEXT_PUBLIC_DEV ==="true") {
    const ip = process.env.BACKEND_IP
    server.listen(port, ip, () => {
        console.log(`Dev environment, Backend server is running on port ${port}`)
    })
} else {
    server.listen(port, () => {
        console.log(`PROD environment, Backend server is running on port ${port}`)
    })
}
server.listen(process.env.PORT, () => {
    console.log(`Backend server is running on port ${port}`)
})
