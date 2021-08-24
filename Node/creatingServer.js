const http = require("http");

//old vanilla node.js
// const routes = require("./routes");

//using express
 const express = require("express");
 const app = express();

// next moves us to the next app.use
// use path farther in the app vs starting with root path
 app.use('/add-product',(req,res, next) => {
  console.log('In the add product path');
  res.send('<h1>Hello from add product Express</h1>');
 });

 // send ends the flow and sends the response to the browser
 app.use((req,res, next) => {
  console.log('In the root path');
  res.send('<h1>Hello from Express</h1>');
 });

//old vanilla node.js
// const server = http.createServer(routes);

const server = http.createServer(app);


server.listen(3000);
//sdfasdf
