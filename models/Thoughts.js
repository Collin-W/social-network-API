const { Schema, model } = require('mongoose');




const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
           //1-280 chars
           minLength: 1,
           maxLength:280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
          },

          username:{
              type: String,
              required: true
          },

          reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true

        },
        id: false
    }
)




module.exports = Thought