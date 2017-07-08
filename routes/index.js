const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

router.get('/list', async (req,res) => {
  const qoutes = await qoute.find();
  res.render('list',{qoutes});
});

module.exports = router;
