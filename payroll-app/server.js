const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

//var connectionString = 'mongodb://127.0.0.1:27017/EmployeeDB';
var connectionString = ''

if(process.env.MLAB_USERNAME) { 
    var username = process.env.MLAB_USERNAME; 
    var password = process.env.MLAB_PASSWORD;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds263639.mlab.com:63639/heroku_066cw7mj'; 
 }
 
var mongoose = require("mongoose");
mongoose.connect(connectionString, { socketTimeoutMS: 30000, keepAlive: true, reconnectTries: 3000});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


const api = require('./server/routes/api');

app.use('/api', api);

const port = '9000';
app.set('port', port);

const server = http.createServer(app);

var serverSide = require('./server/app');
serverSide(app);

app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:4200");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    // res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

var PPORT = process.env.PORT || port;

server.listen(PPORT, ()=> console.log(`API running on localhost:${port}`));