module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: { type: dataTypes.STRING },
        surname: { type: dataTypes.STRING },
        username: { type: dataTypes.STRING },
        email: { type: dataTypes.STRING },
        phone: { type: dataTypes.STRING },
        birthdate: { type: dataTypes.DATE },
        gender: { type: dataTypes.STRING },
        DNI: { type: dataTypes.STRING },
        profilePhoto: { type: dataTypes.STRING },
        Password: { type: dataTypes.STRING }
       
    }

    const configs = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define('User', cols, configs);

    User.associate = function(models){
        User.hasMany(models.Product, {
            as: 'products', 
            foreignKey:'user_id'
        })

    }

    return User;
}