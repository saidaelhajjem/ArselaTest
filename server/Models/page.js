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
        }
    },
    {
        timestamps: true,
    }
)

module.exports = Page = mongoose.model('Page', PagesSchema)
