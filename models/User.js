const { Schema } = require('mongoose');

const User = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //basic email validaion 
            match:[/^(.+)@(.+)$/]
//email validation
        },
        thoughts: [_id],
        friends: [_id]
    },
    {
    toJSON: {
        virtuals: true
    },
    id: false
}

)

User.virtual('friendCount').get(function () {
    return this.friends.length
})

module.exports = User