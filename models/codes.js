'use strict';
module.exports = (sequelize, DataTypes) => {
  const Codes = sequelize.define('Codes', {
    codeName: {
      type: DataTypes.STRING,
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
  Codes.associate = function(models) {
    // associations can be defined here
  };
  return Codes;
};