const knex = require("knex");
const knexConfig = require("../knexfile");
const { NODE_ENV } = require("../config");

const environment = NODE_ENV || "development";

module.exports = knex(knexConfig[environment]);
