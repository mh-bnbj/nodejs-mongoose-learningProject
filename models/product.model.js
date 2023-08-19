const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        name: { type: String, required: true },
        unitPrice: { type: Number, required: true },
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
    },
    {
        versionKey: false,
    }
)

const product = mongoose.model('product', productSchema)

module.exports = product
