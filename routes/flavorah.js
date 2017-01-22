var express = require('express');
var route = express.Router();
var flavoursJSON = require('../flavours.json');

var flavorah_flavours = flavoursJSON.flavorah;

route.get('/', function(req, res) {
   res.render("product_group", {
       flavours : flavorah_flavours
   })
});

route.get('/:productNumber', function(req, res) {
    var productNumber = req.params.productNumber;
    var product = flavorah_flavours[productNumber];
    if(productNumber >=0 && productNumber < flavorah_flavours.length) {
        res.render("product", {
        product : product
    });
    } else {
        res.render("fileNotFound");
    }
});

module.exports = route;