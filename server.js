const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDatabase = require("./src/config/db");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDatabase();

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/admins", require("./src/routes/adminRoutes"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin Panel API is Working",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
