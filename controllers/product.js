var functions = require('../db/functions');

const controllers = { 
    show: function(req, res) {
        const results = functions.findProductById()
        res.send(results)
    }

  
}
console.log(controllers)
module.exports = controllers;