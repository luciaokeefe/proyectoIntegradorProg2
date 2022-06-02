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
        const hashedPassword = hasher.hashSync(req.body.Password, 10);
        db.User.create({
                name: req.body.name,
                surname: req.body.surname,
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phone,
                birthdate: req.body.birthdate,
                gender: req.body.gender,
                DNI: req.body.DNI,
                profilephoto: req.body.profilephoto,
                Password: hashedPassword,    
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

