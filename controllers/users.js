var db = require("../database/models");


const controllers = {
    edit: function (req, res) {
        res.render('profileEdit');
    },
    myProfile: function(req, res) {
        db.User.findByPk(req.session.user.id, { include: [ { association: 'products' } ] })
            .then(function (user) {
                res.render('profile', { user });
            })
            .catch(function (error) {
                res.send(error)
            });
    },
    profile: function(req, res) {
        db.User.findByPk(req.params.id, { include: [ { association: 'products' } ] })
            .then(function (user) {
                res.render('profile', { user });
            })
            .catch(function (error) {
                res.send(error)
            });
    },
    
}
module.exports = controllers;