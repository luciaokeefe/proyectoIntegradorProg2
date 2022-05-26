module.exports = function (sequelize, dataTypes) {
    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        username: { type: dataTypes.STRING },
        profilePhoto: { type: dataTypes.STRING },
        comment: { type: dataTypes.STRING },
       
    }

    const configs = {
        tableName: 'comments',
        timestamps: false
    }

    const Comment = sequelize.define('Comment', cols, configs);

    return Comment;
}