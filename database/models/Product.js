module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        marca: { type: dataTypes.STRING },
        modelo: { type: dataTypes.STRING },
        colorDelArmazon: { type: dataTypes.STRING },
        colorDelLente: { type: dataTypes.STRING },
        IMG: { type: dataTypes.STRING },
       
    }

    const configs = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define('Product', cols, configs);

    return Product;
}