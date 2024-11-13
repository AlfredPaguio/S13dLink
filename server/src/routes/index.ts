import {
  getAllShortenedUrlsController,
  createShortUrlController,
  redirectShortUrlController,
  // deleteShortUrlController,
} from "../controllers";

// import type { Request, Response } from "express";

import express from "express";
const router = express.Router();

// get all links
router.get("/list", getAllShortenedUrlsController);
// router.get("/", (req: Request, res: Response) => {
//   res.send("test");
// });
// add a link
router.post("/add", createShortUrlController);
// redirect
router.get("/:shortUrl", redirectShortUrlController);
// delete
// router.delete("/:shortUrl", deleteShortUrlController);

// update
// router.patch("/", createShortUrlController);

// get specific link data
// router.get("/:id", something);

export default router;
