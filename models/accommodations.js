'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodations = sequelize.define('Accommodations', {
    division: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    classification: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressCode: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Accommodations.associate = function(models) {
    // associations can be defined here
  };
  return Accommodations;
};