const mongoose = require('mongoose')

const RolesSchema = new mongoose.Schema(
    {
        type: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = Role = mongoose.model('Role', RolesSchema);