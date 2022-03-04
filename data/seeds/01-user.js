exports.seed = function (knex) {
  return knex("user").insert([
    {
      email: "test@gmail.com",
      password: "test",
      user_id: 1,
    },
  ]);
};
