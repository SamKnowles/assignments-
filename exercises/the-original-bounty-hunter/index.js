const express = require('express');
const bodyParser = require('body-parser');
const bountyRoutes = require('./routes/bounties')
const cors = require('cors');
const mongoose = require('mongoose')

let bounty = require('./model/bounties')

const app = express();
const config = require('./config');

app.use(bodyParser.json());
app.use(cors());
app.use("/bounty", bountyRoutes)

mongoose.connect("mongodb://localhost:27017", () => {
    console.log('Connected to MongoDB')
})

app.listen(config.port, () => {
    console.log('listening on ' + config.port);
})
