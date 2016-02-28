var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
const fs = require('fs');
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//var mongo = require('./app/mongo');
//app.use('/mongo', mongo);

var firebase = require('./app/firebase');
app.use('/', firebase);

//------------------------------------------------------------------------------
var yummly = require("./app/yummly");

//------------------------------------------------------------------------------

var port = process.env.PORT || 3000;
var IP = process.env.IP || "0.0.0.0";
console.log("listening on port", port);
app.listen(port, IP);
