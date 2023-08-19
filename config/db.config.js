const mongoose = require('mongoose')

const mongoDB_Url = process.env.MONGODB_URL

console.log('mongodb url : ', mongoDB_Url)
mongoose.connect(mongoDB_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('error', (err) => {
    console.log('error to mongodb : ', err)
})

mongoose.connection.on('connected', (res) => {
    console.log('connected to mongodb')
})
