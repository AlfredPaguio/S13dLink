import type { ShortenedUrlType } from "../models/schema";
import { createShortUrl, getAllShortenedUrls } from "../services";
import type { Request, Response } from "express";

async function createShortUrlController(req: Request, res: Response) {
  const originalUrl = req.body.originalUrl;
  if (!originalUrl) return;
  try {
    const { shortUrl } = await createShortUrl({ originalUrl });
    return res
      .status(201)
      .send({ shortUrl: shortUrl, msg: "Short URL created successfully" });
  } catch (error) {
    return res.status(500).send("Error creating short URL");
  }
}

async function getAllShortenedUrlsController(req: Request, res: Response) {
  try {
    const shortenedUrls = await getAllShortenedUrls();
    return res.status(200).json(shortenedUrls);
  } catch (error) {
    return res.status(500).send("Error fetching shortened URLs");
  }
}

export { createShortUrlController, getAllShortenedUrlsController };
