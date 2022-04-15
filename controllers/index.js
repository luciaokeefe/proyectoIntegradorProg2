var functions = require('../db/functions');
var data = require('../db/data');


const controllers = {
    indexAll: function (req, res) {
        res.render('index', { products: data.products})
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


