const app = require('./app')
const port = process.env.PORT 
const ip = process.env.BACKEND_IP
app.listen(port, ip, () => {
    console.log(`Server is running on port ${port}`)
})
