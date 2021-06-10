"use strict";

const Sequelize = require("sequelize");

let sequelize = null;

module.exports = function setupDatabase(config) {
  if (!sequelize) {
    sequelize = new Sequelize(config);
  }
  return sequelize;
};

//QUEDE EN LA CLASE 15!!!
