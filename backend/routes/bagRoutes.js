const express = require("express");
const router = express.Router();

const { getAllBags, getBagByID } = require("../controller/bagControllers");

// Get all products from db
// Get to /api/bags
router.get("/", getAllBags);

// Get a product by ID from db
// Get to /api/bags/:id
router.get("/:id", getBagByID);

module.exports = router;
