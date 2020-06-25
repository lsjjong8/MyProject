'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomServices = sequelize.define('RoomServices', {
    reservationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serviceCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
  RoomServices.associate = function(models) {
    RoomServices.hasMany(models.Reservations);
  };
  return RoomServices;
};