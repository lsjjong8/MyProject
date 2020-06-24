'use strict';
module.exports = (sequelize, DataTypes) => {
  const Members = sequelize.define('Members', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Members.associate = function(models) {
    // associations can be defined here
  };
  return Members;
};