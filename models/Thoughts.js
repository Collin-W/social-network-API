const { Schema, model } = require('mongoose');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
          },
          reactionBody: {
            type: String,
            required: true
          },
          username: {
            type: String,
            required: true
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
          }
        },
        {
          toJSON: {
            getters: true
          }
        } 
    
)




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

          reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true

        },
        id: false
    }
)

const Thought = model('Thought', ThoughtSchema)


module.exports = Thought