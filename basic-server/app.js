const express = require('express');
const app = express();
const port = 3000;

const rockets = require('./src/data/rockets');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/rockets', (req, res) => {
  res.json({ rockets });
});

app.listen(port, () => {
  console.log('server is up on port ' + port);
});
