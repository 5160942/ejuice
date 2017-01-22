var express = require('express');
var route = express.Router();
var flavoursJSON = require('../flavours.json');

var molinberry_flavours = flavoursJSON.molinberry;

route.get('/', function(req, res) {
   res.render("product_group", {
       flavours : molinberry_flavours,
       title : molinberry_flavours.company
   })
});

route.get('/:productNumber', function(req, res) {
    var productNumber = req.params.productNumber;
    var product = molinberry_flavours[productNumber];
    if(productNumber >=0 && productNumber < molinberry_flavours.length) {
        res.render("product", {
        product : product
    });
    } else {
        res.render("fileNotFound");
    }
});

module.exports = route;