// const http = require('http');

const express = require('express');
const app = express();

app.use('/users',(req, res, next) => {
console.log('in the users section');
res.send('<h1>Hello users!</h1>');
});

app.use('/',(req, res, next) => {
  console.log('in the main section');
  res.send('<h1>Welcome to Monterrey</h1>');
});

app.listen(8000);