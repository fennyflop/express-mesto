const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    required: true,
    type: String,
    validate: {
      validator: function (v) {
        return /^https?:\/\/\S{1,}\.\w[-a-zA-Z]\b([-a-zA-Z0-9()@:_\+.~!#;'?,&//=\-\*\$]*)$#?/.test(v)
      }
    }
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'card',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model('card', cardSchema);