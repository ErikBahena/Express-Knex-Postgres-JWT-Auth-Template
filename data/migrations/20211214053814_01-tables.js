exports.up = function (knex) {
  return knex.schema.createTable("user", (users) => {
    users.increments("user_id");
    users.string("first_name").notNullable();
    users.string("last_name").notNullable();
    users.string("email").notNullable().unique();
    users.string("password", 200).notNullable();
    users.string("photo_url");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
