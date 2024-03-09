const {
  getAllShortenedUrlsController,
  createShortUrlController,
  redirectShortUrlController,
} = require("../controllers");

const express = require("express");
const router = express.Router();

// get all links
router.get("/", getAllShortenedUrlsController);
// add a link
router.post("/add", createShortUrlController);
// redirect
router.get("/redirect/:shortUrl", redirectShortUrlController);

// update
// router.patch("/", createShortUrlController);

// get specific link data
// router.get("/:id", something);

module.exports = router;
