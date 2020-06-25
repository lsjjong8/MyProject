'use strict';
module.exports = (sequelize, DataTypes) => {
  const ConciergeServices = sequelize.define('ConciergeServices', {
    name: {
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
  ConciergeServices.associate = function(models) {
    // associations can be defined here
  };
  return ConciergeServices;
};