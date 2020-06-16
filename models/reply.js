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
    reply.belongsTo(models.post, {
      foreignKey: "postId"
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