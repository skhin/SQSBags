require("dotenv").config();

const bagsData = require("./data/bags");
const connectDB = require("./config/db");
const Bags = require("./models/Bags");

connectDB();

const importData = async () => {
  // delete everything in database to insert many items
  try {
    await Bags.deleteMany({});

    await Bags.insertMany(bagsData);

    console.log("Data Import Done");
    process.exit();
  } catch (error) {
    console.error("Error with importing data");
    process.exit(1);
  }
};

// to run the function immediately when the file is called
importData();
