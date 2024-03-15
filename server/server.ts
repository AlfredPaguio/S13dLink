import express from "express";
const shortUrlRoutes = require("./routes/index");

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", shortUrlRoutes);

app.listen(port, () => {
  console.info(`[Server]: Server is running at http://localhost:${port}`);
});
