const { Schema } = require('mongoose');




const Thought = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
           //1-280 chars
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
    }
)




module.exports = Thought