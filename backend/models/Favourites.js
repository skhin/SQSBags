const mongoose = require("mongoose");
const FavouritesSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String },
    color: { type: String },
    material: { type: String },
    img: { type: String },
  },
  { collection: "favourites" }
);
const Favourites = mongoose.model("favourites", FavouritesSchema);
module.exports = Favourites;
