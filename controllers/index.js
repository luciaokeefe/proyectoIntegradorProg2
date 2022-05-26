var db = require("../database/models");


const controllers = {
    indexAll: function (req, res) {
        db.products.findAll()
            .then(function (products) {
                res.render ('index', { products });
            })    
            .catch(function (error) {
                    res.send(error)
                });
    },

    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        res.render('register');
    },
    results: function (req, res) {
        res.render('searchResults');

    }
}

module.exports = controllers;

