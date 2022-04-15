var user = require("../db/users")

const controllers = {
    users: function (req, res) {
        res.render('profile', {user: user})
    },
    edit: function (req, res) {
        res.render('profileEdit');
    },
    


}
module.exports = controllers;