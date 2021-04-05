const express = require("express");
const router = express.Router();

const USERS = [];

router.get("/users", (req, res, next) => {
  res.status(200).render("users", { pageTitle: "Users", users: USERS });
});

router.post("/add-user", (req, res, next) => {
  // console.log("req.body: ", req.body);
  USERS.push({ user: req.body.user });

  res.status(302).redirect("/users");
});

router.get("/", (req, res, next) => {
  res.status(200).render("add-user", { pageTitle: "Add User" });
});

module.exports = {
  adminRoutes: router,
};
