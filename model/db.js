const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const qoutesSchema = new mongoose.Schema({
  author: {
    type: String
  },
  qoute: {
    type: String
  }
});
const qoute = mongoose.model('qoutes', qoutesSchema);
