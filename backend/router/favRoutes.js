const express = require("express");
const Favourites = require("../models/Favourites");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");
const router = express.Router();

//create Favs
router.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newFav = new Favourites(req.body);

  try {
    const savedFav = await newFav.save();
    res.status(200).json(savedFav);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updateFav = await Favourites.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateFav);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Favourites.findByIdAndDelete(req.params.id);
    res.status(200).json("Favourite Removed!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET FAVOURITES
router.get("/fav/:userid", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const favourites = await Favourites.findOne({ userID: req.params.userid });
    res.status(200).json(favourites);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
