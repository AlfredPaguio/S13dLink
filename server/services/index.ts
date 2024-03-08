import mongoose from "mongoose";
import { ShortenedUrlModel, type ShortenedUrlType } from "../models/schema";

async function connectToDatabase() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-app");
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5"
  );
}

async function disconnectFromDatabase() {
  await mongoose.disconnect();
}

async function createShortUrl({
  originalUrl,
}: Pick<ShortenedUrlType, "originalUrl">) {
  await connectToDatabase();
  const shortenedUrl = new ShortenedUrlModel({ originalUrl });
  await shortenedUrl.save();
  await disconnectFromDatabase();
  return shortenedUrl;
}

async function getAllShortenedUrls() {
  await connectToDatabase();
  const shortenedUrls = await ShortenedUrlModel.find();
  await disconnectFromDatabase();
  return shortenedUrls;
}

export { createShortUrl, getAllShortenedUrls };
