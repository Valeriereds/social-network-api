// import moment.js for date format
// reaction schema can go on this page
// createdAt for both thought and reaction schema needs date formatting
const moment = require ('moment')
const {Schema, model} = require('mongoose');

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
);