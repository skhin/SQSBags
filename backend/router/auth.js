const express = require("express");
const router = express.Router();
const User = require("../models/users");

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    phone: req.body.phone,
  });
  try {
    const userSavedinDB = await newUser.save();
    res.status(201).json(userSavedinDB);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
