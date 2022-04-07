var functions = require('../db/functions');

const controllers = {
    show: function (req, res) {
        const results = functions.findProductById(req.params.id)
        res.send(results)
    }

}
console.log(controllers)
module.exports = controllers;