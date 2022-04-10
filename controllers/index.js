var functions = require('../db/functions');

const controllers = {
    indexAll: function (req, res) {
        const results = functions.getAll()
        res.render('index')
    },

    login: function (req, res) {
        res.render('login');
    },

    register: function (req, res) {
        res.render('register');
    },


}
console.log(controllers)
module.exports = controllers;


