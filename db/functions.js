const { indexAll } = require("../controllers/index.js");
const array = require("./sunglasses.js")
const users = require("./users")

function getAll() {
    return array;
};


function findProductById(id) {
    const acumulador = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) {
            acumulador.push(array[i]);
        } else { }
    }
    return acumulador;
};

function getAllUsers() {
    return users;
};




module.exports = {
    getAll,
    findProductById,
    getAllUsers,
}