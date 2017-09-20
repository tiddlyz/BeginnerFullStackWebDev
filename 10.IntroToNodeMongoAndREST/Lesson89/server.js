var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "232kAK",
        "text": "Eggs"
    },
    {
        "id": "12ere",
        "text": "Milk"
    },
    {
        "id": "232efe",
        "text": "Bacon"
    },
    {
        "id": "232e34fe",
        "text": "Frogs legs"
    }
];

app.get('/', function (request, response) {
    response.send("My First API!");
});

app.get('/funions', function (request, response) {
    response.send("You give me some funions foo!");
});

app.get('/ingredients', function (request, response) {
    response.send(ingredients);
});

app.post('/ingredients', function (request, response) {
    var ingredient = request.body;
    if(!ingredient || ingredient.text===""){
        response.status(500).send({error: "Your ingredient must have text"});
    }
    else{
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

app.listen(3000, function () {
    console.log("First API running on port 3000!");
});