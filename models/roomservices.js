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
    }
  },
  {
    // timestamps: false,
  }
  );
  RoomServices.associate = function(models) {
    // associations can be defined here
  };
  return RoomServices;
};