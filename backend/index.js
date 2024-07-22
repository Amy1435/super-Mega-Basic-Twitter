import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import tweetsRoute from "./routes/tweet.js";
dotenv.config();

const app = express();
const port = 5000;

app.use(morgan("dev"));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);

app.use(express.json());
// Tweet Api
app.use("/tweets", tweetsRoute);
// Connect
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
