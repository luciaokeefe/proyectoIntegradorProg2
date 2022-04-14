var data = require('../db/data');



const controllers = {
    show: function (req, res) {
        res.render('product', {product: data.products[req.params.id -1], user: data.users, comment: data.comments})
    },
    add: function (req, res) {
        res.render('productAdd') 
    },
   /*  userComment: function (req, res) {
        res.render('product', {user: users})
    },  */
}

module.exports = controllers;