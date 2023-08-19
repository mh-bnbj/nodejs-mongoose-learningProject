const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        name: { type: String, required: true },
    },
    {
        versionKey: false,
    }
)

const category = mongoose.model('category', categorySchema)

module.exports = category
