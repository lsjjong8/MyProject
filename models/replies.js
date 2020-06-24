'use strict';
module.exports = (sequelize, DataTypes) => {
  const Replies = sequelize.define('Replies', {
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accommodationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Replies.associate = function(models) {
    // associations can be defined here
  };
  return Replies;
};