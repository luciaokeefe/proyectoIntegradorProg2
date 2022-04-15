const data = require("../db/data");
var user = require("../db/data")

const controllers = {
    users: function (req, res) {
        res.render('profile', {user: data.user, products: data.products})
    },
    edit: function (req, res) {
        res.render('profileEdit');
    },
    


}
module.exports = controllers;