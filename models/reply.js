'use strict';
module.exports = (sequelize, DataTypes) => {
  var reply = sequelize.define('reply', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    division: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    writer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });

  reply.associate = function(models){
    // 복합키 잡기 해결 필요
    reply.belongsTo(models.post, {
      foreignKey: "postId"
      // foreignKey: ["postId", "division"]
    })
  };

  return reply;
};