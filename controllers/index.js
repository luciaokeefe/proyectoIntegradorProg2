var db = require("../database/models");
var hasher = require("bcryptjs");

const controllers = {
    indexAll: function (req, res) {
        db.Product.findAll()
            .then(function (products) {
                res.render ('index', { products });
            })    
            .catch(function (error) {
                    res.send(error)
                })

    },

    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        res.render('register');
    },

    store: function(req, res) {
        if (!req.body.email) { throw Error('Not email provided.') }
        const hashedPassword = hasher.hashSync(req.body.password, 10);
        db.User.create({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
            })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    results: function (req, res) {
        res.render('searchResults');

    }
}

module.exports = controllers;

