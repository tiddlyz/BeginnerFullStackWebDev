var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/swag-shop");

var Product = require("./product");
var WishList = require("./wishList");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/product", function(request, response){
    Product.find({}, function (err, products) {
       if(err){
           response.status(500).send({error: "Could not fetch products"});
       } 
       else{
           response.send(products);
       }
    });
});

exports.app = app;