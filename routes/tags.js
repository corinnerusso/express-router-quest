const express = require("express");

const router = express.Router({ mergeParams: true });
const fakeTags = require("../data/tags");
const fakePosts = require("../data/posts");

// Get a list of tags
router.get("/", (req, res) => {
  res.json(fakeTags);
});

router.get("/:tagId/posts", (req, res) => {
  const tagId = Number(req.params.tagId);
  const postTags = fakePosts.filter(toto => toto.tag_ids.includes(tagId));
  res.json(postTags);
});

module.exports = router;
