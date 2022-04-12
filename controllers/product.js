var functions = require('../db/functions');
const sunglasses = require('../db/sunglasses');

const controllers = {
    show: function (req, res) {
        res.render('product', {product: sunglasses[req.params.id -1]  })
    },

    
}

console.log(controllers)
module.exports = controllers;