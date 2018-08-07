const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/LoginApp', { useNewUrlParser: true }).then((db, err) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server:', err);
  }
  console.log('Connected to MongoDB server');
});
