var data = require('../db/data');
<<<<<<< HEAD


=======
>>>>>>> 34c37c5907f5176a639fbe48b466d12f166476db

const controllers = {
    show: function (req, res) {
        res.render('product', {product: data[req.params.id -1], user: data.users, comment: data.comments})
    },
    add: function (req, res) {
        res.render('productAdd') 
    }
}

module.exports = controllers;