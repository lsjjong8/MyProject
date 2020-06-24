'use strict';
module.exports = (sequelize, DataTypes) => {
  const CodeCategories = sequelize.define('CodeCategories', {
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false
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