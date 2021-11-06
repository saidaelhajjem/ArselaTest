const mongoose = require('mongoose')

const TypesSchema = new mongoose.Schema(
    {
        type: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = Type = mongoose.model('Type', TypesSchema)
