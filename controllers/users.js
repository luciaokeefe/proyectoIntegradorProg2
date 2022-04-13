var functions = require("../db/functions")

const controllers = {
    users: function(req, res) {
        const results = functions.getAllUsers()
        res.render('profile', { users: results})
    },
    edit: function (req, res){
        res.render('profileEdit');

    }


}
module.exports = controllers; 