"use strict";
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const coordinates = sequelize.define(
    "coordinates",
    {
      id: {
        field: "id",
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      type: {
        field: "type",
        type: Sequelize.STRING(5),
        allowNull: false,
      },
      long:{
        field: "long",
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      lat:{
        field: "lat",
        type: Sequelize.STRING(200),
        allowNull: false,
      }
    },
    {
      timestamps: false,
      tableName: "coordinates",
    }
  );

  coordinates.associate = function (models) {};
  return coordinates;
};
