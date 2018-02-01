const express = require('express');
const bountiesRouter = express.Router();
const bountyModel = require('../model/bounties');


bountiesRouter.route('/')
    .post((req, res) => {
        let newBounty = new bountyModel(req.body);
        newBounty.save(req.body, (err, savedBounty) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(savedBounty);
            }
        })
    })
    .get((req, res) => {
        bountyModel.find((err, foundBounty) => {
            if (err) {
                console.error(err);
            }
            else {
                res.send(foundBounty);
            }
        });
    });
bountiesRouter.route('/:id')
    .get((req, res) => {
        let { id } = req.params;
        bountyModel.findById({ _id: id }, (err, foundBounty) => {
            if (err) {
                console.error(err);
            }
            else {
                res.send(foundBounty);
            }
        })
    })
    .delete((req, res) => {
        let{id} = req.params;
        bountyModel.findByIdAndRemove(id, (err, removedBounty) => {
            if (err) {
                console.error(err);
            }
            else {
                res.send(removedBounty);
            }
        })
    })
    .put((req, res) => {
        let {id} = req.params;
        // ID is the collection query and {new: true} is the configuration setting
        bountyModel.findByIdAndUpdate(id, req.body, {new: true},(err, updatedBounty) => {
            if(err){
                console.error(err);
            } else {
                res.send(updatedBounty);
            }
        })
    })

    
module.exports = bountiesRouter;

