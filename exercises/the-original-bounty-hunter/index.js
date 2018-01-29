const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

let bounty = require('./database.js')

const app = express();
let port = 8080;

app.use(bodyParser.json());

app.get('/bounty', (req, res) => {
    res.send(bounty);
});

app.post('/bounty', (req, res) => {
    let newBounty = req.body;
    newBounty._id = uuid();
    bounty.push(newBounty);
    res.send({
        msg: 'Data added succesfully',
        data: newBounty
    });
});

app.delete('/bounty/:id', (req, res) => {
    let {id} = req.params;
    let found = false;
    for (let i = 0; i < bounty.length; i++) {
        if(bounty[i]._id === id) {
            bounty.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was sucessfully removed!`
        });
    }
    else {
        res.send({
            msg: `Item ${id} was NOT removed sucessfully!`
        })
    }
});

app.get('/bounty/:id', (req, res) => {
    let {id} = req.params;
    let found = falsee;
    let foundBounty;
    for (let i = 0; i < bounty.length; i++) {
        if (bounty[i]._id === id) {
            found = true;
            foundBounty = bounty[i];
            break;
        }
    }
    if(found) {
        res.send({
            msg: `Item ${id} was found!`,
            data: foundBounty
        })
    }
    else {
        res.send({
            msg: `Item ${id} was NOT found!`
        })
    }
})

app.put('/bounty/:id', (req, res) => {
    let {id} = req.params;
    let updatedBounty = req.body;
    let found = false;
    for (let i = 0; i < bounty.length; i++) {
        if(bount[i]._id === id) {
            bounty[i] = Object.assign(bounty[i], updatedBounty);
            updatedBounty = bounty[i];
            found = true;
            break;
        }
    }
    if (found) {
        res.send({
            msg: `Item ${id} was updated!`,
            data: updatedBounty
        })
    }
    else {
        res.send({
            msg: `Item ${id} was Not updated`
        })
    }
})

app.listen(port, () => {
    console.log('listening on ' + port);
})
