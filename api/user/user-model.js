const db = require("../../data/dbConfig");

async function addUser(newUser) {
  const [newUserId] = await db("user as u").insert(newUser).returning("u.*");

  return findById(newUserId);
}

async function findById(user_id) {
  return await db("user")
    .select("user_id", "first_name", "last_name", "email", "photo_url")
    .where("user_id", user_id)
    .first();
}

async function findBy(arg1, arg2) {
  return await db("user")
    .select(
      "user_id",
      "first_name",
      "last_name",
      "email",
      "password",
      "photo_url"
    )
    .where(arg1, arg2)
    .first();
}

async function updateUser(user_id, newData) {
  return await db("user").update(newData).where("user_id", user_id);
}

async function deleteUser(user_id) {
  const deleted = await findById("user_id", id);

  await db("user").where("user_id", user_id).del();

  return deleted;
}

module.exports = {
  addUser,
  findById,
  updateUser,
  deleteUser,
  findBy,
};
