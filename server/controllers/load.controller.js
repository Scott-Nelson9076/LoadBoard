const {response, request} = require('express');
const Load = require('../models/load.model');

module.exports.createLoad = (req,res) => {
    Load.create(req.body)
        .then(newLoad => res.json(newLoad))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllLoads = (req,res) => {
    Load.find({})
        .then(loads => res.json(loads))
        .catch(err => res.json(err))
}

module.exports.getALoad = (req,res) => {
    Load.findOne({_id:req.params.id})
        .then(load => res.json(load))
        .catch(err => res.json(err))
}

module.exports.deleteLoad = (req,res) => {
    Load.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.updateLoad = (req,res) => {
    Load.findOneAndUpdate({_id:req.params.id}, req.body,{new:true,runValidators: true})
        .then(changedLoad => res.json(changedLoad))
        .catch(err => res.status(400).json(err))
}