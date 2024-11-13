import {
  createShortUrl,
  // deleteShortUrl,
  findOriginalUrl,
  findShortUrl,
  getAllShortenedUrls,
} from "../services/shortUrl";
import type { Request, Response } from "express";
import isValidUrl from "../utils/isValidUrl";
import addHTTPS from "../utils/AddHTTPS";

async function createShortUrlController(req: Request, res: Response) {
  const { originalUrl } = req.body;
  // const BASE_URL = Bun.env.BASE_URL;

  if (!originalUrl) {
    return res
      .status(400)
      .send("The request cannot be fulfilled due to missing data.");
  }

  if (!isValidUrl(originalUrl)) {
    return res.status(400).send("The url cannot be parsed.");
  }

  try {
    const existingUrl = await findOriginalUrl(originalUrl);
    // console.log("existing:", existingUrl)
    if (existingUrl) {
      // url.com/api/shortUrl
      return res.status(200).json({
        shortUrl: existingUrl.shortUrl,
        message: "Existing URL found",
      });
    }

    const newShortUrl = createShortUrl({ originalUrl });
    return res.status(201).send({
      shortUrl: newShortUrl.shortUrl,
      message: "Short URL created successfully",
    });
  } catch (error) {
    return res.status(500).send("Error creating short URL");
  }
}

async function getAllShortenedUrlsController(req: Request, res: Response) {
  try {
    const shortenedUrls = getAllShortenedUrls();
    return res.status(200).json(shortenedUrls);
  } catch (error) {
    return res.status(500).send("Error fetching shortened URLs");
  }
}

async function redirectShortUrlController(req: Request, res: Response) {
  const { shortUrl: findUrl } = req.params;
  if (!findUrl) {
    return res.status(404).send("Short URL not found.");
  }
  console.log("Find URL:", findUrl);
  try {
    const shortUrl = findShortUrl(findUrl);
    if (!shortUrl) {
      return res.status(404).send("Short URL not found.");
    }

    shortUrl.clickCount++;

    const finalUrl = await addHTTPS(shortUrl.originalUrl);
    console.log("Final URL:", finalUrl);
    return res.redirect(302, finalUrl);
  } catch (error) {
    return res.status(500).send("Error: " + error);
  }
}

// async function deleteShortUrlController(req: Request, res: Response) {
//   const { shortUrl: toBeDeleted } = req.params;
//   console.log("Deleting:", toBeDeleted);
//   try {
//     const deletedUrl = await deleteShortUrl(toBeDeleted);
//     if (deletedUrl.deletedCount == 0) {
//       return res.status(400).json("URL not found");
//     }
//     return res.status(200).json({ message: `${toBeDeleted} deleted` });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json("Server Error" + error);
//   }
// }

export {
  createShortUrlController,
  getAllShortenedUrlsController,
  redirectShortUrlController,
  // deleteShortUrlController,
};
