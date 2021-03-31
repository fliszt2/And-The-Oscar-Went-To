const express = require('express');
// const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db.js');
const config = require('../config.js');

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());

// app.get('/movies/:year', (req, res) => {
//   db.fetchWinners(req.params.year)
//     .then((data) => res.send(data))
//     .catch((err) => res.status(500).send(err));
// });

app.get('/movies/:year', (req, res) => {
  db.fetchWinners(req.params.year, (err, data) => {
    if (err) {
      console.log('err:', err);
      return res.status(500).send(err);
    }
    // console.log('data:', data);
    res.send(data);
  });
});

// app.get('/review/:title', (req, res) => {
//   console.log('req.params.title:', req.params.title);
//   res.sendStatus(200);
// });

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