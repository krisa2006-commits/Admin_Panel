const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");

exports.getAllAdmins = (req, res) => {
  Admin.find()
    .select("-password")
    .then((admins) => {
      res.status(200).json({
        success: true,
        admins,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};

exports.getSingleAdmin = (req, res) => {
  Admin.findById(req.params.id)
    .select("-password")
    .then((admin) => {
      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "Admin Not Found",
        });
      }

      res.status(200).json({
        success: true,
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

exports.updateAdmin = (req, res) => {
  const { name, email, password, role, status } = req.body;

  const updateData = { name, email, role, status };

  if (password) {
    bcrypt.hash(password, 10).then((hashedPassword) => {
      updateData.password = hashedPassword;

      updateAdminData();
    });
  } else {
    updateAdminData();
  }

  function updateAdminData() {
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });

    Admin.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    })
      .select("-password")
      .then((admin) => {
        if (!admin) {
          return res.status(404).json({
            success: false,
            message: "Admin Not Found",
          });
        }

        res.status(200).json({
          success: true,
          message: "Admin Updated Successfully",
          admin,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      });
  }
};

exports.deleteAdmin = (req, res) => {
  Admin.findByIdAndDelete(req.params.id)
    .then((admin) => {
      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "Admin Not Found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Admin Deleted Successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    });
};
