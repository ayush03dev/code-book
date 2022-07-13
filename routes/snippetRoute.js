const express = require("express");
const auth = require("../middlewares/authMiddleware");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Snippet = require("../models/snippetModel");
const { mongoose } = require("mongoose");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.isObjectIdOrHexString(id)) {
    return res.status(400).json({ message: "Invalid snippet id!" });
  }

  try {
    const snippet = await Snippet.findById(id);
    if (!snippet) {
      return res
        .status(404)
        .json({ message: "Could not find snippet by that id!" });
    }
    res.json(snippet);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Invalid snippet id!" });
  }
});

router.post(
  "/",
  [
    [
      check("description", "Enter description").not().isEmpty(),
      check("code", "Enter code").not().isEmpty(),
    ],
    auth,
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = req.user;
    const { description, code, input } = req.body;

    try {
      const snippet = new Snippet({
        postedBy: user,
        description,
        code,
        input: input ? input : "",
      });
      await snippet.save();
      res.json({ message: "Snippet saved!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: error.message, error });
    }
  }
);

module.exports = router;
