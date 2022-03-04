const router = require("express").Router();
const User = require("../user/user-model");

const {
  alreadyExistsInDb,
  checkEmailExists,
} = require("../user/user-middleware.js");

const {
  validateUserLogin,
  validateUserRegister,
  validatePassword,
  hashPassword,
} = require("./auth-middleware");

router.post(
  "/register",
  validateUserRegister,
  alreadyExistsInDb,
  hashPassword,
  (req, res, next) => {
    User.addUser(req.user)
      .then((newUser) => {
        newUser.token = req.token;
        res.status(201).json(newUser);
      })
      .catch(next);
  }
);

router.post(
  "/login",
  validateUserLogin,
  checkEmailExists,
  validatePassword,
  (req, res) => {
    res.status(200).json({
      first_name: req.userFromDb.first_name,
      last_name: req.userFromDb.last_name,
      email: req.userFromDb.email,
      user_id: req.userFromDb.user_id,
      photo_url: req.userFromDb.photo_url,
      token: req.token,
    });
  }
);

module.exports = router;
