var functions = require('../db/functions');


const controllers = {
    indexAll: function (req, res) {
        const results = functions.getAll()
        res.render('index', { products: results})
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


