'use strict';
module.exports = (sequelize, DataTypes) => {
  const accommodations = sequelize.define('accommodations', {
    accommodationId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    division: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accommodationName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressCode: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    streetnameaddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
  });
  accommodations.associate = function (models) {
    // associations can be defined here
  };
  return accommodations;
};