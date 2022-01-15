const express = require("express");
const router = express.Router();
const BagsModel = require("../models/Bags");

const {
  getAllBags,
  getBagByID,
  createNewBag,
  editBag,
  deleteBag,
} = require("../controller/bagControllers");

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

// router.get("/:id", async (req, res) => {
//   const bag = await BagsModel.find({ _id: req.params.id });
//   res.json({ bag });
// });
// router.get("/new", createNewBag); //will be handled by react

// router.get("/new", (req, res) => {
//     res.render("new.ejs");
//   });

router.post("/new", createNewBag);

// router.post("/", async (req, res) => {
//     await BagsModel.create(req.body);
//     const allBags = await BagsModel.find();
//     // res.render("index.ejs", { data: allMongoose });
//   });

router.put("/:id/edit", editBag);

// router.put("/:id/edit", async (req, res) => {
//   response = await BagsModel.updateOne(
//     { _id: req.params.id },
//     {
//       $set: {
//         name: req.body.name,
//         img: req.body.img,
//         description: req.body.description,
//         price: req.body.price,
//         qty: req.body.qty,
//       },
//     }
//   );
//   console.log(response);
//   //need to find out how to set only filled fields
//   res.json(`/show/${req.params.id}`);
// });

router.delete("/:id", deleteBag);

// router.delete("/:id", async (req, res) => {
//   await BagsModel.findByIdAndDelete(req.params.id, {
//     useFindAndModify: false,
//   });
//   // res.redirect("/");
// });

module.exports = router;
