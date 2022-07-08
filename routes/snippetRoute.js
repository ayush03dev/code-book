const express = require("express");
const auth = require("../middlewares/authMiddleware");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.post(
  "/",
  [
    [
      check("info", "Enter information").not().isEmpty(),
      check("code", "Enter code").not().isEmpty(),
    ],
    auth,
  ],
  async (req, res) => {
    const user = req.user;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
    } catch (error) {}
  }
);

module.exports = router;
