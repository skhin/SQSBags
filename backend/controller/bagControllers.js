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

// router.get("/new", (req, res) => {
//   res.render(<new item page>);// handled by front end
// });

const createNewBag = async (req, res) => {
  try {
    await BagsModel.create(req.body);

    res.status(200).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(403).json({ status: "fail", message: "Server Error" });
  }
};

const editBag = async (req, res) => {
  try {
    response = await BagsModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(response);
    //need to find out how to set only filled fields
    const bag = await BagsModel.findById(req.params.id);

    res.json(bag);
  } catch (error) {
    console.error(error);
    res.status(403).json({ status: "fail", message: "Server Error" });
  }
};

const deleteBag = async (req, res) => {
  try {
    await BagsModel.findByIdAndDelete(req.params.id, {
      useFindAndModify: false,
    });

    res.status(200).json("Bag Deleted!");
  } catch (error) {
    console.error(error);
    res.status(403).json({ status: "fail", message: "Server Error" });
  }
};

module.exports = { getAllBags, getBagByID, createNewBag, editBag, deleteBag };
