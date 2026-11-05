const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerAdmin = (req, res) => {
  const { name, email, password } = req.body;

  Admin.findOne({ email })
    .then((admin) => {
      if (admin) {
        return res.status(400).json({
          success: false,
          message: "Admin already exists",
        });
      }

      return bcrypt.hash(password, 10);
    })
    .then((hashedPassword) => {
      if (!hashedPassword) return;

      const newAdmin = new Admin({
        name,
        email,
        password: hashedPassword,
      });

      return newAdmin.save();
    })
    .then((admin) => {
      if (!admin) return;

      res.status(201).json({
        success: true,
        message: "Admin Registered Successfully",
        admin,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

exports.loginAdmin = (req, res) => {
  const { email, password } = req.body;

  Admin.findOne({ email })
    .select("+password")
    .then((admin) => {
      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "Admin Not Found",
        });
      }

      if (admin.status !== "active") {
        return res.status(403).json({
          success: false,
          message: "Admin Account Is Inactive",
        });
      }

      return bcrypt.compare(password, admin.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(401).json({
            success: false,
            message: "Invalid Password",
          });
        }

        const token = jwt.sign(
          { id: admin._id, role: admin.role },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRE },
        );

        res.status(200).json({
          success: true,
          message: "Login Successfully",
          token,
        });
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};
