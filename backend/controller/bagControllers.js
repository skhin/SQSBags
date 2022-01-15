const BagsModel = require("../models/Bags");

const getAllBags = async (req, res) => {
  try {
    const bags = await BagsModel.find({});

    res.json(bags);
  } catch (error) {
    console.error(error);
    res.status(403).json({ status: "fail", message: "Server Error" });
  }
};

const getBagByID = async (req, res) => {
  try {
    const bag = await BagsModel.findById(req.params.id);

    res.json(bag);
  } catch (error) {
    console.error(error);
    res.status(403).json({ status: "fail", message: "Server Error" });
  }
};

module.exports = { getAllBags, getBagByID };
