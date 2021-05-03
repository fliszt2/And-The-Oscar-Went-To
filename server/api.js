const axios = require('axios');
// const config = require('../config.js');
// require('dotenv').config();


// const nyTimesToken = NYTIMESTOKEN;
// const imdbId = IMDBID;
// const omdbApiKey = OMDBAPIKEY;
// const rapidApiKey = RAPIDAPIKEY;
const nyTimesToken = process.env.NYTIMESTOKEN;
const imdbId = process.env.IMDBID;
const omdbApiKey = process.env.OMDBAPIKEY;
const rapidApiKey = process.env.RAPIDAPIKEY;

module.exports.getReview = (year, title, cb) => {
  var formattedTitle = title.toLowerCase().split(' ').join('+');
  var query = `https://api.nytimes.com/svc/movies/v2//reviews/search.json?query=${formattedTitle}&opening-date=${Number(year) - 1}-01-01:${Number(year) + 1}-01-01&api-key=${nyTimesToken}`;
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

module.exports.getSummary = (title, cb) => {
  var formattedTitle = title.toLowerCase().split(' ').join('+');
  var query = `http://www.omdbapi.com/?i=${imdbId}&apikey=${omdbApiKey}&type=movie&plot=short&r=json&t=${formattedTitle}`;
  axios.get(query)
    .then((info) => {
      // if "Response" === "True"
      cb(null, info.data);
    })
    .catch((err) => cb(err));
};

module.exports.getPoster = (info, cb) => {
  var query = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${info[0]}&page="1"&r="json"`;
  // console.log('query:', query);
  var options = {
    headers: {
      'x-rapidapi-key': rapidApiKey,
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