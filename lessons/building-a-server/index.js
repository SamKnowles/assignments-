//request
//response

const express = require('express');
const bodyParser = require('body-parser');
const uuid = require("uuid");

let coins = require('./database.js');

const app = express();
let port = 8080;

//middleware
app.use(bodyParser.json());

// routes


app.listen(port, () => {
    console.log('listening on port ' + port);
})