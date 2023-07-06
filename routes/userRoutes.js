const express = require("express");
const User = require("../models/userModel");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.isObjectIdOrHexString(id)) {
    return res.status(400).json({ message: "Invalid user id!" });
  }

  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ message: "Could not find user by that id!" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Invalid user id!" });
  }
});

router.post(
  "/register",
  [
    check("email", "Enter a valid email!").isEmail(),
    check("username", "Enter a username!").not().isEmpty(),
    check(
      "password",
      "Enter a valid password with at least 6 characters!"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, username, password } = req.body;
    console.log(req);
    try {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) {
        return res.status(400).json({ message: "Email is already taken!" });
      }

      const usernameTaken = await User.findOne({ username });
      if (usernameTaken) {
        return res.status(400).json({ message: "Username is already taken!" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      const user = new User({ email, username, password: hashed });

      await user.save();
      console.log(user);

      const token = jwt.sign(
        {
          user: user.id,
        },
        process.env.JWT_SECRET
      );

      res.json({ token });
    } catch (error) {
      console.error(`${error.message}`);
      return res.status(500).json({ message: "Server Error!", error });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Please enter a valid email!").isEmail(),
    check("password", "Please enter the password").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }

      const check = await bcrypt.compare(password, user.password);

      if (!check) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }

      const token = jwt.sign(
        {
          user: user.id,
        },
        process.env.JWT_SECRET
      );

      console.log(token);

      return res.json({ token });
    } catch (error) {
      console.error(`${error.message}`.red.inverse);
      return res.status(500).json({ message: "Server Error!", error });
    }
  }
);

module.exports = router;
