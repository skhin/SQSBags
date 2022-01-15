const mongoose = require("mongoose");
const BagsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String },
    material: { type: String },
    type: { type: String },
    occasion: { type: String },
    img: { type: String },
    stock: { type: Number, min: 0 },
    price: { type: Number, min: 0 },
    tags: [String],
  },
  { collection: "bags" }
);
const BagsModel = mongoose.model("bags", BagsSchema);
module.exports = BagsModel;
