const axios = require('axios');
const config = require('../config.js');

var getPoster = (info, cb) => {
  var query = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${info[0]}&page="1"&r="json"`;
  console.log('query:', query);
  var options = {
    headers: {
      'x-rapidapi-key': config.rapidApiKey,
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'useQueryString': true
    }
  };
  axios.get(query, options)
    .then((data) => {
      return cb(null, data);
    })
    .catch((err) => cb(err));
};

getPoster(['The King\'s Speech', '2008'], (err, data) => {
  if (err) { console.log('err:', err ); }
  console.log('data.data.Search:', data.data.Search);
});