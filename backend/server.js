require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bagRoutes = require("./router/bagRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/bags", bagRoutes);

//  ************** LISTENER ************** //
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
