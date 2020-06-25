'use strict';

const accommodations = require("./accommodations");

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
    // roomId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // memberId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // roomsServiceId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // paymentId: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
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
  Reservations.associate = function(models) {
    // Reservations.belongsTo(models.Accommodations, {
    //   foreignKey: "accommodationId"
    // });
    // Reservations.belongsTo(models.Rooms, {
    //   foreignKey: "roomId"
    // });
    // Reservations.belongsTo(models.Members, {
    //   foreignKey: "memberId"
    // });
    // Reservations.belongsTo(models.RoomServices, {
    //   foreignKey: "roomServicesId"
    // });
    // Reservations.belongsTo(models.Payment, {
    //   foreignKey: "paymentId"
    // });
    
  };
  return Reservations;
};