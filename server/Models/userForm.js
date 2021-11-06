const mongoose = require('mongoose');



const UserFormSchema = new mongoose.Schema(
    {
        user: { type : mongoose.Schema.Types.ObjectId,
             ref: 'User' 
        },
        page: {
            type : mongoose.Schema.Types.ObjectId, 
            ref: 'Page' 
        },
        forms: [{
            label: String,
            value:mongoose.Schema.Types.Mixed,
           
         }]


    },
    {
        timestamps: true,
    }
)

module.exports = UserForm = mongoose.model('UserForm', UserFormSchema)