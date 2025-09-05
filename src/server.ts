// const http = require("node:http");
import http from "node:http";

const server = http.createServer({ keepAliveTimeout: 60000 }, (_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000);
