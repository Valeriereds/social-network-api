// import moment.js for date format
// reaction schema can go on this page
// createdAt for both thought and reaction schema needs date formatting
const moment = require ('moment')
const {Schema, model, Types} = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM, Do, YYYY [at] HH:MM a'),
    },
},
{
  toJSON: {
    getters: true
  },
  id: false,
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMM, Do, YYYY [at] HH:MM a'),
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ reactionSchema ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return `${this.reactions.length}`
  });

  const Thought = model('thought', thoughtSchema);

  module.exports = Thought;