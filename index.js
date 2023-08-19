const express = require('express')

//Load environment file
require('dotenv').config()

//setup mongodb connection
require('./config/db.config')

const apiRoutes = require('./routes/api.routes')
const app = express()

//for get body
app.use(express.json())

//api routes
app.use('/api', apiRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
