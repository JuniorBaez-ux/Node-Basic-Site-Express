const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/', function(req, res) {
  res.render("index");
});

app.get('/about.html', function(req, res) {
  res.render("about");
});

app.get('/index.html', function(req, res) {
  res.render("index");
});

app.get('/contact-me.html', function(req, res) {
  res.render("contact-me");
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
