const mongoose = require('mongoose')

const PagesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        link: {
            type: String,
        },
        description: {
            type: String,
        },
        form: {
            type: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Form' }],
        }
    },
    {
        timestamps: true,
    }
)

module.exports = Page = mongoose.model('Page', PagesSchema)
