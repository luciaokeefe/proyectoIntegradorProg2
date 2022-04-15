var data = require('../db/data');



const controllers = {
    show: function (req, res) {
        res.render('product', {product: data[req.params.id -1], user: data.users, comment: data.comments})
    },
    add: function (req, res) {
        res.render('productAdd') 
    }
}

module.exports = controllers;