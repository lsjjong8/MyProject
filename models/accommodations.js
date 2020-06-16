'use strict';
module.exports = (sequelize, DataTypes) => {
  const accommodations = sequelize.define('accommodations', {
    id: {
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
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    grade: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true
    }
  }, {
    timestamps: false,
  });
  accommodations.associate = function (models) {
    // accommodations.hasOne(models.accommodationmemo);
  };
  return accommodations;
};