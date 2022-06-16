module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        comment: { type: dataTypes.STRING },
        product_id:  { type: dataTypes.INTEGER },
        user_id:  { type: dataTypes.INTEGER },
        createdAt: { type: dataTypes.DATE }
       
    }

    const configs = {
        tableName: 'comments',
        timestamps: false
    }

    const Comment = sequelize.define('Comment', cols, configs);

    Comment.associate = function(models){
        Comment.belongsTo(models.Product, {
            as:'product',
            foreignKey: 'product_id'
         }),
         
         Comment.belongsTo(models.User, {
            as:'user',
            foreignKey: 'user_id'
         })

    }


    return Comment;
}