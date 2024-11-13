import { nanoid } from "nanoid";

interface ShortUrl {
  id: number;
  originalUrl: string;
  shortUrl: string;
  clickCount: number;
}

// Simulated in-memory database
const dummyDatabase: ShortUrl[] = [];
let idCounter = 1;

function createShortUrl({ originalUrl }: { originalUrl: string }): ShortUrl {
  const shortUrl = nanoid(13);
  const newShortUrl: ShortUrl = {
    id: idCounter++,
    originalUrl,
    shortUrl,
    clickCount: 0,
  };
  dummyDatabase.push(newShortUrl);
  return newShortUrl;
}

function getAllShortenedUrls(): ShortUrl[] {
  return dummyDatabase;
}

function findShortUrl(shortUrl: string): ShortUrl | undefined {
  return dummyDatabase.find((url) => url.shortUrl === shortUrl);
}

function findOriginalUrl(originalUrl: string): ShortUrl | undefined {
  return dummyDatabase.find((url) => url.originalUrl === originalUrl);
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
