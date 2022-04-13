var functions = require("../db/functions")

const controllers = {
    users: function(req, res) {
        const results = functions.getAllUsers()
        res.send(results)
    },
    profile: function (req, res) {
        res.render('profile');
    },
    edit: function (req, res){
        res.render('profileEdit');

    }


    // editUser: function (req, res) {
    //     res.send ()
    // }

}
module.exports = controllers; 