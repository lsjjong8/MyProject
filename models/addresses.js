'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Addresses', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.BIGINT
    },
    addressName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sidoCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sigunguCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eupmyundongCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    liCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(18, 9),
      allowNull: false,
      validate: {
        min: -90,
        max: 90
      }
    },
    altitude: {
      type: DataTypes.DECIMAL(18, 9),
      allowNull: false,
      validate: {
        min: -180,
        max: 180
      }
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
  }, {
    // timestamps: false,
  });
  Addresses.associate = function (models) {
    // Addresses.hasMany(models.Accommodations);
  };
  return Addresses;
};