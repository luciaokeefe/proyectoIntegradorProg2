var data = require('../db/sunglasses');


const controllers = {
    show: function (req, res) {
        res.render('product', {products: data.products[req.params.id -1]})
    },
    add: function (req, res) {
        res.render('/productAdd') 
    }

    
}

module.exports = controllers;