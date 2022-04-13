var data = require('../db/sunglasses');


const controllers = {
    show: function (req, res) {
        res.render('product', {products: data.products[req.params.id -1]})
    },

    
}

console.log(controllers)
module.exports = controllers;