'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
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
        validate: {
          min: -90,
          max: 90
        }
      },
      altitude: {
        type: Sequelize.DECIMAL(18, 9),
        allowNull: false,
        validate: {
          min: -180,
          max: 180
        }
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
    return queryInterface.dropTable('Addresses');
  }
};