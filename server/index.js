const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db.js');
const config = require('../config.js');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());

var whereami = __dirname + '/../client/public';
console.log('whereami:', whereami);

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(port, () => console.log(`Server is listening at ${config.host}:${port}`));

// db.findYear('2007 (80th)');


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