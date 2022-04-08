var functions = require('../db/functions');

const controllers = {
    indexAll: function (req, res) {
        const results = functions.getAll()
        res.send(results)
    },

    login: function (req, res) {
        res.render('login', { title: 'Login' });
    },

    register: function (req, res) {
        res.render('register', { title: 'Register' });
    },


}
console.log(controllers)
module.exports = controllers;