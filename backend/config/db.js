const mongoose = require("mongoose");

const db =
  "mongodb+srv://yeos:GAPa55w0rd@cluster0.gfhcj.mongodb.net/bags?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connection OK");
  } catch (error) {
    console.log("MongoDB connection FAIL ");
    process.exit(1);
  }
};

module.exports = connectDB;
