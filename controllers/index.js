var functions = require('../db/functions');

const controllers = { 
    indexAll: function(req, res) {
        const results = functions.getAll()
        res.send(results)
    }

  
}
console.log(controllers)
module.exports = controllers;