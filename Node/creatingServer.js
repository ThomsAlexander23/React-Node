const http = require("http");

//old vanilla node.js
// const routes = require("./routes");

//using express
 const express = require("express");
 const app = express();
 app.use((req,res, next) => {
  console.log('In the middleware')
 });

 // next moves us to the next app.use
 app.use((req,res, next) => {
  console.log('In the middleware')
 });

//old vanilla node.js
// const server = http.createServer(routes);

const server = http.createServer(app);


server.listen(3000);
