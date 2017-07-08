const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Database Schema
const qoutesSchema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId
  },
  catId: {
    type: String
  },
  quote: {
    type: String
  },
  isValid: {
    type: Boolean
  },
  created:{
    type: Date
  }
});
const qoutes = mongoose.model('qoutes', qoutesSchema);

const usersSchema = new mongoose.Schema({
  deviceId: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  isFacebook: {
    type: String
  },
  facebookToken: {
    type: String
  },
  created: {
    type: Date
  },
  ip: {
    type: String
  }
});
const user = mongoose.model('users', usersSchema);

//tokens
const tokensSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  token: {
    type: String
  },
  created: {
    type: Date
  }
});
const tokens = mongoose.model('tokens', tokensSchema);

//users_quotes
const usersQuotesSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  quoteId: {
    type: String
  },
  like: {
    type: String
  },
  created: {
    type: Date
  }
});
const usersQuotes = mongoose.model('usersQuotes', usersQuotesSchema);

//users_backgorund
const usersBackgroundsSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  bgId: {
    type: String
  },
  created: {
    type: Date
  }
});
const usersBackgrounds = mongoose.model('usersBackgrounds', usersBackgroundsSchema);

//backgrounds
const backgroundsSchema = new mongoose.Schema({
  name: {
    type: Schema.Types.ObjectId
  },
  bgId: {
    type: String
  },
  isValid: {
    type: Boolean
  },
  created:{
    type: Date
  }
});
const backgrounds = mongoose.model('backgrounds', backgroundsSchema);


//users_todos
const usersTodosSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  title: {
    type: String
  },
  reward: {
    type: String
  },
  tag: {
    type: String
  },
  resFeel: {
    type: String
  },
  resDo: {
    type: String
  },
  resDestracktion: {
    type: String
  },
  resLearn: {
    type: String
  },
  created: {
    type: Date
  }
});
const usersTodos = mongoose.model('usersTodos', usersTodosSchema);






//codes


router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', async(req, res) => {
  let silence = new qoute(req.body);
  // let silence = new qoute({
  //   author: req.body.author,
  //   qoute: req.body.qoute
  // });
  await silence.save();
  res.render('index');
});

router.get('/list', async (req,res) => {
  const qoutes = await qoute.find();
  res.render('list',{qoutes});
});

module.exports = router;
