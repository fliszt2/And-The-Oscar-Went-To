const axios = require('axios');
const config = require('../config.js');

module.exports.getReview = (year, title, cb) => {
  var formattedTitle = title.toLowerCase().split(' ').join('+');
  var query = `https://api.nytimes.com/svc/movies/v2//reviews/search.json?query=${formattedTitle}&opening-date=${Number(year) - 1}-01-01:${Number(year) + 1}-01-01&api-key=${config.nytimesToken}`;
  // console.log('query:', query);
  axios.get(query)
    .then((data) => {
      if (data.data.num_results === 0) { return cb(null, null); }
      // console.log('data.data.results[0]:', data.data.results[0]);
      return cb(null, data.data.results[0]);
    })
    .catch((err) => cb(err));
  // return 'review for ' + year + title;
};