'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodations = sequelize.define('Accommodations', {
    kinds: {
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
    phoneNumber: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    addressId: {
      type: DataTypes.BIGINT,
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
  Accommodations.associate = function(models) {
    Accommodations.belongsTo(models.Addresses, {
      foreignKey: "addressId"
    });
    
    Accommodations.hasMany(models.Reservations);
  };
  return Accommodations;
};