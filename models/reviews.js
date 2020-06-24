'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    reservationId: {
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
  Reviews.associate = function(models) {
    // associations can be defined here
  };
  return Reviews;
};