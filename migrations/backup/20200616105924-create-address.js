'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      addressName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sidoCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sigunguCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      eupmyundongCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      liCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.DECIMAL(18, 9),
        allowNull: false,
      },
      altitude: {
        type: Sequelize.DECIMAL(18, 9),
        allowNull: false,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');
  }
};