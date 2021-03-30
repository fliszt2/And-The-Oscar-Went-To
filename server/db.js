const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mvp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', function() {
  console.log('Successfully connected to MongoDB!');
});

let oscarSchema = new mongoose.Schema({
  '_id': String,
  'Year': String,
  'Category': String,
  'Nominee': String,
  'Additional Info': String,
  'Won?': String
});

let Oscar = mongoose.model('Oscar', oscarSchema);

var findYear = (year) => {
  Oscar.findOne({ 'Year': year })
    .then(doc => {
      console.log('doc:', doc)
    })
    .catch(err => {
      console.error('err:', err)
    });
};


module.exports = { findYear };