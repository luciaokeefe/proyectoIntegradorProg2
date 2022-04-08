var functions = require("../db/functions")

const controllers = {
    users: function(req, res) {
        const results = functions.getAllUsers()
        res.send(results)
    },

    // editUser: function (req, res) {
    //     res.send ()
    // }

}
module.exports = controllers