const express = require('express');
const ismsRouter = express.Router();
const ismModel = require('../models/isms.js');



ismsRouter.route('/')
    .post((req, res) => {
        let newIsm = new ismModel(req.body);
        newIsm.save(req.body, (err, savedIsm) => {
            if (err) {
                console.error(err);
            }
            else {
                res.send(savedIsm);
            }
        })
    })
    .get((req, res) => {
        ismModel.find((err, foundIsms) => {
            if (err) {
                console.error(err);
            }
            else {
                res.send(foundIsms);
            }
        });
    })
ismsRouter.route('/:id')
    .get((req, res) => {
        let { id } = req.params;
        ismModel.findById({ _id: id }, (err, foundIsm) => {
            if (err) {
                console.error(err);
            }
            else {
                res.send(foundIsm);
            }
        })
    })
    .delete((req, res) => {
            let{id} = req.params;
            ismModel.findByIdAndRemove(id, (err, removedIsm) => {
                if (err) {
                    console.error(err);
                }
                else {
                    res.send(removedIsm);
                }
            })
        })
        .put((req, res) => {
            let {id} = req.params;
            // ID is the collection query and {new: true} is the configuration setting
            ismModel.findByIdAndUpdate(id, req.body, {new: true},(err, updatedIsm) => {
                if(err){
                    console.error(err);
                } else {
                    res.send(updatedIsm);
                }
            })
        })

module.exports = ismsRouter;