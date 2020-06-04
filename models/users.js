module.exports = function(sequelize, DataTypes){
    let user = sequelize.define("User", {
        emailID: {
            emailId: "email_id",
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false
        },
        nickname: {
            nickname: "nickname",
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false
        },
        password: {
            field: "password",
            type: DataTypes.STRING(30),
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "user"
    });
    return user;
}