const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    const { method, url } = req;
    if (method == "GET" && url == "/") {
      fs.readFile("./index.html", (err, data) => {
        res.setHeader("Content-Type", "text/html");
        res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
        res.end(data);
      });
    } else if (method == "GET" && url == "/users") {
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
      res.end(JSON.stringify([{ name: "tom", age: 20 }]));
    }
  })
  .listen(3000);
