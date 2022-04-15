const array = require("./sunglasses.js")
const users = require("./users.js")

function getAll() {
    return array;
};

function getAllUsers() {
    return users;
};


module.exports = {
    getAll,
    getAllUsers
}