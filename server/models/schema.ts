import mongoose from "mongoose";
import { nanoid } from "nanoid";

const ShortenedUrlSchema = new mongoose.Schema(
  {
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, default: () => nanoid(13) },
    clickCount: { type: Number, required: true, default: 0 },
  },
  {
    methods: {
      whoami() {
        return `I am ${this.originalUrl}!`;
      },
    },
  }
);

export type ShortenedUrlType = mongoose.InferSchemaType<
  typeof ShortenedUrlSchema
>;
export const ShortenedUrlModel = mongoose.model("ShortUrl", ShortenedUrlSchema);
