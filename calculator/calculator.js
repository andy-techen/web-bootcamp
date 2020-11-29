// jshint esverion:6

const express = require('express');
const bodyParser = require('body-parser');
const https = require("https")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight / Math.pow(height, 2);

    res.write("Your BMI = " + Math.round(result * 10) / 10);
    res.send();
});

app.listen(3000, function(req, res) {
    console.log('server started on port 3000')
});
