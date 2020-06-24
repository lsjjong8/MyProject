'use strict';
module.exports = (sequelize, DataTypes) => {
  const Logs = sequelize.define('Logs', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Logs.associate = function(models) {
    // associations can be defined here
  };
  return Logs;
};