const array = require("./data.js")

function getAll() {
    return array.products;
};

function getAllUsers() {
    return array.users;
};


module.exports = {
    getAll,
    getAllUsers,
}