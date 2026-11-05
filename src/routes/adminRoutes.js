const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminController");

router.get("/", authMiddleware, getAllAdmins);

router.get("/:id", authMiddleware, getSingleAdmin);

router.put("/:id", authMiddleware, updateAdmin);

router.delete("/:id", authMiddleware, deleteAdmin);

module.exports = router;
