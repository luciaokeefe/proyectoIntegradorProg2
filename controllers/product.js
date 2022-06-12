var db = require('../database/models');

const controllers = {
    show: function (req, res) {
    db.Product.findByPk(req.params.id)
        .then(function (product) {
            res.render('product', {product}) 
        })
        .catch(function (error) {
            res.send(error)
        })
    },
    add: function(req, res) {
        if (!req.session.user) { 
            throw Error('Not authorized.')
        }
        res.render('productAdd');
    },

}

module.exports = controllers;