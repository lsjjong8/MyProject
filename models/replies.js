'use strict';
module.exports = (sequelize, DataTypes) => {
  const Replies = sequelize.define('Replies', {
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Replies.associate = function(models) {
    Replies.belongsTo(models.Reviews, {
      foreignKey: "reviewId"
    });
  };
  return Replies;
};