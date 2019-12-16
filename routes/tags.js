const express = require("express");

const router = express.Router({ mergeParams: true });
const fakeTags = require("../data/tags");

// Get a list of tags
router.get("/", (req, res) => {
  res.json(fakeTags);
});

module.exports = router;
