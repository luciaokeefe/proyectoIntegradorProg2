const array = require("./sunglasses.js")

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
}



module.exports = {
    getAll,
    findProductById,

}