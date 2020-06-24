'use strict';
module.exports = (sequelize, DataTypes) => {
  const Codes = sequelize.define('Codes', {
    codeName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Codes.associate = function(models) {
    // associations can be defined here
  };
  return Codes;
};