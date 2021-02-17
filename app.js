/* All Requires */ //Express
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const app = express();
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true})); //For frontend with EJS

 app.get("/", (req, res) => {

    res.end("Welcome Home");

   });

   app.get("/test/:anything", (req, res) => {

    res.send(req.params.anything); //Return whatever the user inserts into the params

   });

app.get("/login/:name/:passphrase", (req, res) => {
  if(req.cookies.NodeServerSiteCookie === undefined) {
    res.cookie(`NodeServerSiteCookie`, `${req.params.name + req.params.passphrase}`, {maxAge: 100000, httpOnly: true});
    res.end("Your Cookie was created successfully ");
  } else if (req.cookies.NodeServerSiteCookie) {
    // res.end(`Welcome back ${req.params.name}`);
    res.redirect(200,"/private");
  }
});

app.get("/login", (req, res) => {
  if(req.cookies.NodeServerSiteCookie === undefined) {
   res.send("enter your username and passphrase like : /login/Brian/testing1234");
  } else if (req.cookies.NodeServerSiteCookie) {
    // res.end(`Welcome back ${req.params.name}`);
    res.redirect(200,"/private");
  }
});

app.get("/private", (req, res) => {
  if (!req.cookies.NodeServerSiteCookie) { res.send("You may not enter!!!");} else {
res.status(200).json({ secret: "Welcome to the secret... secret... place..." });
  }
  
});


let port = 3005;
app.listen(port, function(){
  console.log(`Server running at http://localhost:${port}/`);
});