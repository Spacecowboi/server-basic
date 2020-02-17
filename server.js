'use strict';

const express = require('express');
const app = express();
const PORT = 3001;
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });

app.use(express.static('./bob'));
app.get('/bananas', (request, response )=>{
  response.send('rocktest');
});
app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
});