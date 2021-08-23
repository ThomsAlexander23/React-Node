const http = require("http");

//old vanilla node.js
// const routes = require("./routes");

//using express
 const express = require("express");
 const app = express();

// next moves us to the next app.use
 app.use((req,res, next) => {
  console.log('In the middleware');
  next();
 });

 // send ends the flow and sends the response to the browser
 app.use((req,res, next) => {
  console.log('In the next middleware');
  res.send('<h1>Hello from Express</h1>');
 });

//old vanilla node.js
// const server = http.createServer(routes);

const server = http.createServer(app);


server.listen(3000);
//sdfasdf
