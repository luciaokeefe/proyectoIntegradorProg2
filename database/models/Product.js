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
        createdAt: { type: dataTypes.DATE },
        user_id: {type:dataTypes.INTEGER}

       
    }

    const configs = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define('Product', cols, configs);

    Product.associate = function(models){
        Product.hasMany(models.Comment, {
            as:'comment',
            foreignKey: 'product_id'
         })
        Product.belongsTo(models.User,{
            as: 'owner',
            foreignKey: 'user_id' 
    })
    
    }


    return Product;
}
