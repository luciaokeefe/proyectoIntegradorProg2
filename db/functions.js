const array = require("./sunglasses.js")

function getAll() {
    return array;   
}

function findProductById(id) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == id) {
                return array[i];
            }
        
        return undefined;
    }
}



module.exports = {
    getAll,
    findProductById,

}