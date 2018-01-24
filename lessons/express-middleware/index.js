const express = require('express');
let database = require('./database.js');
let logger = require('./logger.js');
let sizer = require('./sizer.js');

const app = express();
let port = 8080;

app.use(logger);
app.use(sizer(database));
app.user(bodyparser.json())

app.get('/', (req, res) => {
    res.send({
        data: database,
        size: res.size
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
