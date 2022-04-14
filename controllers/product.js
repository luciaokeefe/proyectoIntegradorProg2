var data = require('../db/sunglasses');
var users = require('../db/users')


const controllers = {
    show: function (req, res) {
        res.render('product', {product: data[req.params.id -1], user: users})
    },
    add: function (req, res) {
        res.render('productAdd') 
    },
   /*  userComment: function (req, res) {
        res.render('product', {user: users})
    },  */
}

module.exports = controllers;