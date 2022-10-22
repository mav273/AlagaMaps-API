"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("coordinates", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      long:{
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      lat:{
        type: Sequelize.STRING(200),
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("coordinates");
  },
};
