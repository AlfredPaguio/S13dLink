import { ShortenedUrlModel, type ShortenedUrlType } from "../models/schema";

async function createShortUrl({
  originalUrl,
}: Pick<ShortenedUrlType, "originalUrl">) {
  const shortenedUrl = new ShortenedUrlModel({ originalUrl });
  const savedShortUrl = await shortenedUrl.save();
  return savedShortUrl;
}

async function getAllShortenedUrls() {
  const shortenedUrls = await ShortenedUrlModel.find();
  return shortenedUrls;
}

async function findShortUrl(shortUrl: string) {
  const findShortUrl = await ShortenedUrlModel.findOne({ shortUrl: shortUrl });
  return findShortUrl;
}

async function findOriginalUrl(originalUrl: string) {
  const findOriginalUrl = await ShortenedUrlModel.findOne({
    originalUrl: originalUrl,
  });
  return findOriginalUrl;
}

// async function deleteShortUrl(shortUrl: string) {
//   const findShortUrl = await ShortenedUrlModel.deleteOne({
//     shortUrl: shortUrl,
//   });
//   return findShortUrl;
// }

export {
  createShortUrl,
  getAllShortenedUrls,
  findShortUrl,
  findOriginalUrl,
  // deleteShortUrl,
};
