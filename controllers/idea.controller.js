const ideas = require('../models/idea.model')

exports.fetchAllidea = (req, res) => {
    res.status(200).send(ideas);
}

let idCount = 1;

exports.createIdea = (req, res) => {
    const idea = req.body;
    idea.id = ++idCount;
    ideas[idCount] = idea;
    res.status(201).send(ideas[idCount])
}

exports.updateIdea = (req, res) => {
    const ideaId = req.params.id;
    if (ideas[ideaId]) {
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId])
    }
    else {
        res.status(400).send({
            message:"not Correct"
        })
    }
}

exports.deleteIdea = (req, res) => {
    if (ideas[req.params.id]) {
        delete ideas[req.params.id]
        res.status(200).send({
            message:"Succesfully deleted"
        })
    }
    else {
        res.status(400).send({
            
        })
    }
}