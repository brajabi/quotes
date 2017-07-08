const app = require('./app');
const mongoose = require('mongoose');
mongoose.connect('config mongo');
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const server = app.listen(3000, () => {
  console.log(`Express running → PORT 3000`);
});

