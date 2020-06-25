'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define('Rooms', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    accommodationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roomStyle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    smokingAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    weekdayPrice: {
      type: DataTypes.DECIMAL(18, 0),
      allowNull: false
    },
    weekendPrice: {
      type: DataTypes.DECIMAL(18, 0),
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
  Rooms.associate = function(models) {
    Rooms.belongsTo(models.Accommodations, {
      foreignKey: "accommodationId"
    });

    Rooms.hasMany(models.Reservations);
  };
  return Rooms;
};