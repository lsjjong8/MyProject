'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chechIn: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      chechOut: {
        type: Sequelize.STRING,
        allowNull: false
      },
      accommodationId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      roomId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      memberId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      roomsServiceId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      paymentId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reservations');
  }
};