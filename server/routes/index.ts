const {
  getAllShortenedUrlsController,
  createShortUrlController,
} = require("../controllers");

const express = require("express");
const router = express.Router();

// get all links
router.get("/", getAllShortenedUrlsController);
// add a link
router.post("/add", createShortUrlController);
// update
// router.patch("/", createShortUrlController);

// get specific link data
// router.get("/:id", something);

module.exports = router;
