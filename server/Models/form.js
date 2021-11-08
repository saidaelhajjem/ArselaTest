const mongoose = require('mongoose')

const FormsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        label: {
            type: String,
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type',
        }
    },
    {
        timestamps: true,
    }
)

module.exports = Form = mongoose.model('Form', FormsSchema)
