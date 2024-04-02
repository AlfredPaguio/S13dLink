import {
  getAllShortenedUrlsController,
  createShortUrlController,
  redirectShortUrlController,
} from "../controllers";

import express from "express";
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

export default router;
