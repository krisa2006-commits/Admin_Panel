const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((error) => {
      console.log("Database Connection Failed:", error.message);
    });
};

module.exports = connectDatabase;
