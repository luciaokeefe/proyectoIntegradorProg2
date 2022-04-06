var index = require('../db/sunglasses');

const controllers = { 
    index: function(req,res) {
        res.render('index', {index: index})
    }
}

module.exports = controllers;