const { Schema } = require('mongoose');

const User = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
//email validation
        },
        thoughts: [_id],
        friends: [_id]
    }
)

//need virtual "Create a virtual called friendCount that retrieves the length of the user's friends array field on query."


module.exports = User