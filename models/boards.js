'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boards = sequelize.define('Boards', {
    division: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    memberId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, 
  {
    // timestamps: false,
  }
  );
  Boards.associate = function (models) {
    // associations can be defined here
  };
  return Boards;
};