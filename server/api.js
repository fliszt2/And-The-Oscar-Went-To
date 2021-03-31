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

module.exports.getPoster = (info, cb) => {
  var query = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${info[0]}&page="1"&r="json"`;
  // console.log('query:', query);
  var options = {
    headers: {
      'x-rapidapi-key': config.rapidApiKey,
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'useQueryString': true
    }
  };
  axios.get(query, options)
    .then((data) => {
      // find the object in data.data.Search that has a year (give or take) matching info[1]
      var posterUrl = '';
      var yearUpperBound = Number(info[1]) + 1;
      var yearLowerBound = Number(info[1]) - 1;
      for (var film of data.data.Search) {
        if (film.Year <= yearUpperBound && film.Year >= yearLowerBound) {
          posterUrl = film.Poster === 'N/A' ? '' : film.Poster;
          break;
        }
      }
      return cb(null, posterUrl);
    })
    .catch((err) => cb(err));
};