const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.set('useFindAndModify', false);
const User = mongoose.model('users', UserSchema);

module.exports = User;
