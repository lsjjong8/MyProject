'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accommodations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      division: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      accommodationName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AddressCode: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      streetnameaddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      grade: {
        type: DataTypes.DECIMAL(3, 1),
        allowNull: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accommodations');
  }
};