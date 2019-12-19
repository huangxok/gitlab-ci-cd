const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get("/", (req, res)=> {
  res.send("server is ok")
});

server.listen(3000, ()=> {
  console.log("server is ok");
});
