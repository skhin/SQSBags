require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bagRoutes = require("./router/bagRoutes");
const authRoutes = require("./router/auth");
const userRoutes = require("./router/userRoutes");
const favRoutes = require("./router/favRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/bags", bagRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/fav/", favRoutes);

//  ************** LISTENER ************** //
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
