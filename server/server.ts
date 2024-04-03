import express from "express";
import shortUrlRoutes from "./routes/index";
import { connectToDatabase } from "./services/db";

const app = express();
const port = Bun.env.PORT || 8080;
await connectToDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", shortUrlRoutes);

app.listen(port, () => {
  console.info(`[Server]: Server is running at http://localhost:${port}`);
});
