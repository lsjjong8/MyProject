'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rooms', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      accommodationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      roomStyle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      smokingAllowed: {
        type: Sequelize.INTEGER,
        allowNull: BOOLEAN
      },
      weekdayPrice: {
        type: Sequelize.DECIMAL(18, 0),
        allowNull: false
      },
      weekendPrice: {
        type: Sequelize.DECIMAL(18, 0),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rooms');
  }
};