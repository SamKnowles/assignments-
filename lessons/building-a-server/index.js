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
app.get('/coins', (req, res) => {
    res.send(coins);
});

app.post('/coins', (req, res) => {
    let newCoin = req.body;
    newCoin._id = uuid();
    coins.push(newCoin);
    res.send({
        msg: 'Data added succsesfully',
        data: newCoin
    });
});



app.delete('/coins/:id', (req, res) => {
    let { id } = req.params;
    let found = false;
    // coins = coins.filter((coin) =>  coin._id !== id);
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            coins.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was successfully removed!`
        });
    }
    else {
        res.send({
            msg: `Item ${id} was not found!`
        })
    }
});

app.get("/coins/:id", (req, res) => {
    let { id } = req.params;
    let found = false;
    let foundCoin;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            found = true;
            foundCoin = coins[i];
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was found!`,
            data: foundCoin
        })
    }
    else {
        res.send({
            msg: `Item ${id} was NOT found!`
        })
    }
})

app.put("/coins/:id", (req, res) => {
    let { id } = req.params;
    let updatedCoin = req.body;
    let found = false;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i]._id === id) {
            coins[i] = Object.assign(coins[i], updatedCoin);
            updatedCoin = coins[i];
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was updated!`,
            data: updatedCoin
        })
    }
    else {
        res.send({
            msg: `Item ${id} was NOT updated!`
        })

    }
})


app.listen(port, () => {
    console.log('listening on port ' + port);
})