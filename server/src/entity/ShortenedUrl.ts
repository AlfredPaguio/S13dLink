import { nanoid } from "nanoid";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShortenedUrl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalUrl: string;

  @Column({ unique: true, default: () => nanoid(13) })
  shortUrl: string;

  @Column({ default: 0 })
  clickCount: number;

  whoami() {
    return `I am ${this.originalUrl}!`;
  }
}

// const ShortenedUrlSchema = new mongoose.Schema(
//   {
//     originalUrl: { type: String, required: true },
//     shortUrl: { type: String, required: true, default: () => nanoid(13) },
//     clickCount: { type: Number, required: true, default: 0 },
//   },
//   {
//     methods: {
//       whoami() {
//         return `I am ${this.originalUrl}!`;
//       },
//     },
//   }
// );
