/* All Requires */ //Express
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


 const app = express();



/* Retrieving values from the form ejs template*/
app.use(bodyParser.urlencoded({extended: true}));



 /* Loading our home route */
 app.get("/", function (req, res) {

    res.end("Home");
     // res.redirect("/");

   });

  app.post("/private", function (req, res) {
  res.status(200).send("Login get endpoint");
});


// const http = require('http'); // Simple Node

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




let port = 3005;
app.listen(port, function(){
  console.log(`Server running at http://localhost:${port}/`);
});