var db = require("../database/models");


const controllers = {
    users: function (req, res) {
        res.render('profile', {user: data.users, products: data.products})
    },
    edit: function (req, res) {
        res.render('profileEdit');
    }
    
}
module.exports = controllers;