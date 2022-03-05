exports.seed = function (knex) {
  return knex("user").insert([
    {
      email: "test@gmail.com",
      first_name: "fname",
      last_name: "lname",
      password: "test",
      user_id: 1,
    },
  ]);
};
