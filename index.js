var axios = require('axios');

let config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

let data = {
  grant_type: 'password',
  username: 'fchopin2',
  password: 'Hitchcock2021!',
  clientId: 'fchopin2'
};

axios.post('https://api.letterboxd.com/api/v0/auth/token', data, config)
  .then((msg) => {
    console.log('msg:', msg);
  })
  .catch((err) => {
    console.log('err.response.data:', err.response.data);
  });