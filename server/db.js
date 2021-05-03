const mongoose = require('mongoose');
const yearData = require('./yearData.js');
const api = require('./api.js');
require('dotenv').config();

const mongodbURI = process.env.MONGODB_URI;

mongoose.connect(mongodbURI || 'mongodb://localhost:27017/mvp', {
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
  var justMainCats;
  // fetch the winning rows from database
  Oscar.find({ 'Year': formattedYear, 'Won?': 'YES'}, ['Category', 'Nominee', 'Additional Info'])
    .then(docs => {
      justMainCats = formatWinners(docs);
      // capture the title
      // console.log('docs:', docs);
      var bestPicTitle = justMainCats.picture.Nominee;
      api.getReview(year, bestPicTitle, (err, data) => {
        if (err) { return cb(err); }
        // console.log('data from api:', data);
        if (data) {
          data.nytimes = true;
          justMainCats.review = data;
          cb(null, justMainCats);
        } else {
          justMainCats.review = { nytimes: false };
          cb(null, justMainCats);
        }
        })
      })
    //     .then((data) => {
    //       console.log('data from api:', data);
    //       justMainCats.review = data;
    //       cb(null, justMainCats);
    //     })
    //     .catch((err) => cb(err));
    // })
    //   api.getReview(year, bestPicTitle, (err, data) => {
    //     if (err) { return cb(err); }
    //     // console.log('data:', data);
    //     justMainCats.review = data;
    //     console.log('justMainCats.picture:', justMainCats.picture);
    //     console.log('justMainCats:', justMainCats);
    //     return cb(null, justMainCats);
    //   })
    //   // cb(null, justMainCats);
    // })
    .catch((err) => cb(err));
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