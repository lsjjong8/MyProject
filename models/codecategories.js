'use strict';
module.exports = (sequelize, DataTypes) => {
  const CodeCategories = sequelize.define('CodeCategories', {
    categoryName: {
      type: DataTypes.STRING,
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
  CodeCategories.associate = function(models) {
    // associations can be defined here
  };
  return CodeCategories;
};