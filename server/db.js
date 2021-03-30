const mongoose = require('mongoose');
const yearData = require('./yearData.js');

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

var formatWinners = (winners) => {
  var formattedWinners = {};
  winners.forEach((winner) => {
    if (winner.Category === 'Best Picture') {
      formattedWinners.picture = winner;
    } else if (winner.Category === 'Directing') {
      formattedWinners.director = winner;
    } else if (winner.Category === 'Actor -- Leading Role') {
      formattedWinners.actor = winner;
    } else if (winner.Category === 'Actress -- Leading Role') {
      formattedWinners.actress = winner;
    }
  });
  return formattedWinners;
};

var fetchWinners = (year, cb) => {
  var formattedYear = yearData[year];
  // fetch the winning rows from database
  Oscar.find({ 'Year': formattedYear, 'Won?': 'YES'}, ['Category', 'Nominee', 'Additional Info'])
    .then(docs => {
      cb(null, formatWinners(docs));
    })
    .catch((err) => {
      console.log('err in fetchWinners:', err);
      cb(err);
    });
};

// var findYear = (year) => {
//   Oscar.findOne({ 'Year': year })
//     .then(doc => {
//       console.log('doc:', doc)
//     })
//     .catch(err => {
//       console.error('err:', err)
//     });
// };


module.exports = { fetchWinners };