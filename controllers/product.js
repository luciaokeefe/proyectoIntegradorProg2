var db = require('../database/models');

const controllers = {
    show: function (req, res) {
    db.products.findByPk(req.params.id)
        .then(function (products) {
            res.render('product', {products: products[req.params.id -1], user: users, comment: comments}) 
        })
        .catch(function (error) {
            res.send(error)
        })
    },
    add: function (req, res) {
        res.render('productAdd') 
    }
}

module.exports = controllers;


