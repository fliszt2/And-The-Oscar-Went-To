var axios = require('axios');
const db = require('./db.js')

db.findYear('2007 (80th)');


// let config = {
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// };

// let data = {
//   grant_type: 'password',
//   username: 'fchopin2',
//   password: 'Hitchcock2021!',
//   clientId: 'fchopin2'
// };

// axios.post('https://api.letterboxd.com/api/v0/auth/token', data, config)
//   .then((msg) => {
//     console.log('msg:', msg);
//   })
//   .catch((err) => {
//     console.log('err.response.data:', err.response.data);
//   });