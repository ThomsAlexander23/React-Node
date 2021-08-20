const fileSystem = require("fs");

const requestHandler = (req, resp) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    resp.write("<html>");
    resp.write("<head><title>My first Page</title></head>");
    resp.write(
      '<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form></body>'
    );
    resp.write("</html>");
    return resp.end();
  }
  if (url === "/message" && method === "POST") {
    const reqBody = [];
    req.on("data", (data) => {
      console.log(data);
      reqBody.push(data);
    });
    req.on("end", () => {
      const parseReqBody = Buffer.concat(reqBody).toString();
      const message = parseReqBody.split("=")[1];
      console.log(parseReqBody);
      console.log(message);
      fileSystem.writeFile("./Node/message.txt", message, (error) => {
        resp.statusCode = 302;
        resp.setHeader("Location", "/");
        return resp.end();
      });
    });
  }
  resp.setHeader("Content-type", "text/html");
  resp.write("<html>");
  resp.write("<head><title>Hello Biddy</title></head>");
  resp.write("<body><h1>routing a request</h1></body>");
  resp.write("</html>");
  resp.end();
};

module.exports = requestHandler;
