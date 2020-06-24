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
      allowNull: false,
      primaryKey: true
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
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Rooms.associate = function(models) {
    // associations can be defined here
  };
  return Rooms;
};