// `npm install --save express body-parser mongoose`
const ismsRouter = require('./routes/isms.js');
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use("/isms", ismsRouter);

mongoose.connect("mongodb://localhost:27017", () => {
    console.log('Connected to MongoDB')
})


app.listen(8080, () => {
    console.log('Connected to port 8080')
});