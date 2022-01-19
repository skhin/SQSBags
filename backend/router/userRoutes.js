const express = require("express");
const Users = require("../models/users");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = express.Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      "okanegadaisukidesu"
    ).toString();
  }

  try {
    const updateUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  console.log(req.headers);
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER BY EMAIL
router.get("/find/email/:email", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await Users.find(
      { email: req.params.email },
      { password: false }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER BY NAME
router.get("/find/name/:name", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await Users.find(
      { name: req.params.name },
      { password: false }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
