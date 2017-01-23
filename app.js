var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan("short"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

//routes
var homeRoute = require('./routes/home');
var fileNotFound = require('./routes/fileNotFound');
var molinberryRoute = require('./routes/molinberry');
var flavorahyRoute = require('./routes/flavorah');

app.use('/', homeRoute);
app.use('/molinberry', molinberryRoute);
app.use('/flavorah', flavorahyRoute);
app.use('*', fileNotFound);

app.listen(process.env.PORT || 3000, function() {
    console.log("listening on port 3000");
});
