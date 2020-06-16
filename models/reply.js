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
      foreignKey: ["postId", "division"]
    })

    // models.post.hasMany(reply, {
    //   foreignKey: "id"
    // });

    // reply.belongsTo(models.post, {
    //   foreignKey: "division"
    // });
    // models.post.hasMany(reply, {
    //   foreignKey: "division"
    // });
    
    // reply.belongsToMany(models.post, {
    //   through: 'reply',
    //   foreignKey: ["postId", "division"]
    // })
  };

  return reply;
};