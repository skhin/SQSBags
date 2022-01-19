const express = require("express");
const router = express.Router();
const User = require("../models/users");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      "okanegadaisukidesu"
    ).toString(),
    address: req.body.address,
    phone: req.body.phone,
    country: req.body.country,
    postal: req.body.postal,
  });
  try {
    const userSavedinDB = await newUser.save();
    res.status(201).json(userSavedinDB);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Username does not exist or wrong password");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      "okanegadaisukidesu"
    );
    const hPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    hPassword !== req.body.password &&
      res.status(401).json("Username does not exist or wrong password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      "jwtkey",
      { expiresIn: "30d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
