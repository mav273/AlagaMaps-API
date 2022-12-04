"use strict";
const data = require("./pontos.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("coordinates", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("coordinates", null, {});
  },
};
