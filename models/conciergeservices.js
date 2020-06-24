'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConciergeServices = sequelize.define('ConciergeServices', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    // timestamps: false,
  }
  );
  ConciergeServices.associate = function(models) {
    // associations can be defined here
  };
  return ConciergeServices;
};