var db = require('../database/models');

const controllers = {
    show: function (req, res) {
    db.Product.findByPk(req.params.id, { include: [ { association: 'comment' } ] })
        .then(function (product) {
            res.render('product', {product}) 
        })
        .catch(function (error) {
            res.send(error)
        })
    },
    add: function(req, res) {
        if (!req.session.user) { 
            throw Error('Not authorized.')
        }
        res.render('productAdd');
    },
    edit: function(req, res) {
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                res.render('productAdd', { product });
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    update: function(req, res) {
        if (req.file) req.body.IMG = (req.file.path).replace('public', '');
        db.Product.update(req.body, { where: { id: req.params.id } })
            .then(function(product) {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },
    store: function(req, res) {
        if (!req.session.user) { 
            return res.render('productAdd', { error: 'Not authorized.' });
        }
        req.body.user_id = req.session.user.id;
        if (req.file) req.body.IMG = (req.file.path).replace('public', '');
        db.Product.create(req.body)
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },

    comment: function(req, res) {
        if (!req.session.user) { 
            throw Error('Not authorized.')
        }
        // Set user from session user
        req.body.user_id = req.session.user.id;
        // Set book from url params
        req.body.product_id = req.params.id;
        db.comment.create(req.body)
            .then(function() {
                res.redirect('/product' + req.params.id)
            })
            .catch(function(error) {
                res.send(error);
            })
    },

}

module.exports = controllers;