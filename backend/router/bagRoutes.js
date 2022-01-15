const express = require("express");
const router = express.Router();
const BagsModel = require("../models/Bags");

const { getAllBags, getBagByID } = require("../controller/bagControllers");

// Get all products from db
// Get to /api/bags
router.get("/", getAllBags);

// router.get("/", async (req, res) => {
//   console.log("getting");
//   const allBags = await BagsModel.find();
//   res.json({ allBags });
// });

// Get a product by ID from db
// Get to /api/bags/:id
router.get("/:id", getBagByID);

module.exports = router;
