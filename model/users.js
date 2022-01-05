const { Schema, model } = require('mongoose');

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  number: Number,
});

module.exports = model('User', user);