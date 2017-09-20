var express = require("express");

var app = express();

app.get('/', function (request, response) {
    response.send("My first API!");
});

app.get('/funions', function (request, response) {
    response.send("You give me some funions foo!");
});

app.listen(3000, function () {
    console.log("First API running on port 3000!");
});