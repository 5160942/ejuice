var express = require('express');
var route = express.Router();

route.get('*', function(req, res) {
    res.render("fileNotFound");
});

module.exports = route;
