import mongoose from "mongoose";
import { ShortenedUrlModel, type ShortenedUrlType } from "../models/schema";

export async function connectToDatabase() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-app");
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5"
    );
  } catch (error) {
    console.error("[Server] Error: " + error);
    return;
  }
}

export async function disconnectFromDatabase() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error("[Server] Error: " + error);
    return;
  }
}

async function createShortUrl({
  originalUrl,
}: Pick<ShortenedUrlType, "originalUrl">) {
  await connectToDatabase();
  const shortenedUrl = new ShortenedUrlModel({ originalUrl });
  const savedShortUrl = await shortenedUrl.save();
  await disconnectFromDatabase();
  return savedShortUrl;
}

async function getAllShortenedUrls() {
  await connectToDatabase();
  const shortenedUrls = await ShortenedUrlModel.find();
  await disconnectFromDatabase();
  return shortenedUrls;
}

async function findShortUrl(shortUrl: string) {
  await connectToDatabase();
  const findShortUrl = await ShortenedUrlModel.findOne({ shortUrl: shortUrl });
  // await disconnectFromDatabase();
  return findShortUrl;
}

export { createShortUrl, getAllShortenedUrls, findShortUrl };
