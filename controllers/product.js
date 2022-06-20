var db = require('../database/models');



const controllers = {
    show: function (req, res) {
        db.Product.findByPk(req.params.id, { include: { all: true, nested: true } })
            .then(function (product) {
                res.render('product', { product })
            })
            .catch(function (error) {
                res.send(error)
            })
    },
    add: function (req, res) {
        if (!req.session.user) {
            throw Error('Not authorized.')
        }
        res.render('productAdd');
    },
    edit: function (req, res) {
        if (req.session.user) {
            db.Product.findByPk(req.params.id)
            .then(function (product) {
                if (product.user_id == req.session.user.id) {
                    res.render('productEdit', { product });
                } else {
                    throw Error('Not authorized.');
                }
            })
            .catch(function (error) {
                res.send(error);
            })          
        } else {
            throw Error('Please login to access this page');
        }
    },
    update: function (req, res) {
        if (req.file) req.body.IMG = (req.file.path).replace('public', '');
        db.Product.update(req.body, { where: { id: req.params.id } })
            .then(function (product) {
                res.redirect('/product/' + req.params.id)
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    store: function (req, res) {
        if (!req.session.user) {
            return res.render('productAdd', { error: 'Not authorized.' });
        }
        req.body.user_id = req.session.user.id;
        if (req.file) req.body.IMG = (req.file.path).replace('public', '');
        db.Product.create(req.body)
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    comment: function (req, res) {

        if (!req.session.user) {
            return res.redirect('/login/');
        }
        else {
            // Set user from session user
            req.body.user_id = req.session.user.id;

            // Set product from url params
            req.body.product_id = req.params.id;

            db.Comment.create(req.body)
                .then(function () {
                    res.redirect('/product/' + req.params.id)
                })
                .catch(function (error) {
                    res.send(error);
                })
        }
    },

    delete: function (req, res) {
        if (!req.session.user) {
            throw Error('Not authorized.')
        }
        db.Product.destroy({ where: { id: req.params.id } })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                res.send(error);
            })
    }

}

module.exports = controllers;