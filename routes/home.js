var express = require('express');
var route = express.Router();
var flavoursJSON = require('../flavours.json');

var molinberry_flavours = flavoursJSON.molinberry;
var flavorah_flavours = flavoursJSON.flavorah;

route.get('/', function(req, res) {
    res.render("home", {
        title : "vape bros",
        molinberry_flavours : molinberry_flavours,
        flavorah_flavours : flavorah_flavours
    });
});

module.exports = route;