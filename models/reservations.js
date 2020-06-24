'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define('Reservations', {
    chechIn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    chechOut: {
      type: DataTypes.STRING,
      allowNull: false
    },
    accommodationId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roomId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memberId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roomsServiceId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paymentId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Reservations.associate = function(models) {
    // associations can be defined here
  };
  return Reservations;
};