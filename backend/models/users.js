//this one creates the collection users with the stated schema that you export back to server
const mongoose = require("mongoose");
//help you check for the DB input
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { collection: "users" },
  { timestamps: true }
);
//the model is an instant of the schema
const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
