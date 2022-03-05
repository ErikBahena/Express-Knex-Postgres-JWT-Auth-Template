const bcrypt = require("bcryptjs");
const { BCRYPT_ROUNDS } = require("../../config");

const hashPassword = (originalPassword) => {
  return bcrypt.hashSync(originalPassword, BCRYPT_ROUNDS);
};

exports.seed = function (knex) {
  return knex("user").insert([
    {
      email: "test@gmail.com",
      first_name: "fname",
      last_name: "lname",
      password: hashPassword("test"),
      user_id: 1,
    },
  ]);
};
