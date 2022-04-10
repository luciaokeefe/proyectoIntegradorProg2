var functions = require('../db/functions');
const sunglasses = require('../db/sunglasses');

const controllers = {
    show: function (req, res) {
        res.render('product', {product: functions.findProductById(req.params.id)})
    },

    
}

console.log(controllers)
module.exports = controllers;