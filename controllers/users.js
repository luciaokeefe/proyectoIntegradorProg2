var db = require("../database/models");


const controllers = {
    myProfile: function(req, res) {

        db.User.findByPk(req.session.user.id,  { include: { all: true, nested: true } })
            .then(function (user) {
                res.render('profile', { user });
            })
            .catch(function (error) {
                res.send(error)
            });
    },
    profile: function(req, res) {
        db.User.findByPk(req.params.id,  { include: { all: true, nested: true } })
            .then(function (user) {
                res.render('profile', { user });
            })
            .catch(function (error) {
                res.send(error)
            });
    },

    edit: function(req, res) {
        db.User.findByPk(req.session.user.id)
             .then(function (user) {
                 res.render('profileEdit', { user });
             })
             .catch(function (error) {
                 res.send(error);
             })
     },
    
     update: function (req, res) {
        if (req.file) req.body.profilePhoto = (req.file.path).replace('public', '');
        db.User.update(req.body, { where: { id: req.session.user.id } })
            .then(function (user) {
                res.redirect('/users/me')
            })
            .catch(function (error) {
                res.send(error);
            })
    },
}
module.exports = controllers;