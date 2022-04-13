var functions = require('../db/functions');


const controllers = {
    show: function (req, res) {
        res.render('product', {product: functions.findProductById[req.params.id -1]})
    },

    
}

console.log(controllers)
module.exports = controllers;