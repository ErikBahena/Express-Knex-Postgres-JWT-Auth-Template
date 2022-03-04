const router = require("express").Router();

const User = require("./user-model.js");
const { restricted } = require("../auth/auth-middleware");

router.get("/:user_id", restricted, (req, res, next) => {
  User.findById(req.params.user_id)
    .then((user) => res.status(200).json(user))
    .catch(next);
});

router.put("/:user_id", restricted, (req, res, next) => {
  User.updateUser(req.params.user_id, req.body)
    .then((updatedUser) => res.status(201).json(updatedUser))
    .catch(next);
});

module.exports = router;
