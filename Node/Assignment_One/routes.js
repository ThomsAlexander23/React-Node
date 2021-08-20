const fs = require('fs');

const requestHandler = (request, response) => {
//logic
const url = request.url;
const method = request.method;

//home essentially
if (url === "/") {
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>Your Username</title></head>');
  response.write('<body><form method="POST" action="/create-user"><input type="text" name="username"></input><button type="submit">Submit</button></form></body>');
  response.write('</html>');
  return response.end();
}
if (url === "/users"){
  // usersname list
response.setHeader("Content-type", "text/html");
response.write('<html>');
response.write('<head><title>Asssignment One</title></head>');
response.write('<body><ul><li>Blackhand</li><li>RightHand</li></ul></body>');
response.write('</html>');
return response.end();
}
// /create-user
if (url === "/create-user" && method === "POST"){
  const requestBody = [];
  request.on("data", data => {
    requestBody.push(data);
  });
  request.on("end", () => {
    const parseBody = Buffer.concat(requestBody).toString();
    const username = parseBody.split("=")[1];
    fs.writeFile("./Node/usernames.txt", username , (error) => {
      response.statusCode = 302;
      response.setHeader("Location", "/users");
      return response.end();
    });
  });
};
}
module.exports = requestHandler