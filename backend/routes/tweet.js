import express from "express";
import Tweet from "../models/tweet.js";
import { nanoid } from "nanoid";
const router = express.Router();

//memory storage
let tweets = [];

//get all tweets
router.get("/", (req, res) => {
  try {
    return res.status(200).json(tweets);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: error.message });
  }
});

//post new tweet
router.post("/", (req, res) => {
  const { username, text } = req.body;
  if (!username || !text) {
    return res.status(400).json("You must insert a username and a text to create a tweet");
  }

  try {
    const newTweet = new Tweet(nanoid(20), username, text);
    tweets.push(newTweet);
    return res.status(201).json(newTweet);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: error.message });
  }
});

//like the tweet
router.post("/:id/like", (req, res) => {
  const likedTweet = tweets.find((t) => t.id === req.params.id);
  if (likedTweet) {
    try {
      likedTweet.likes += 1;
      return res.status(201).json(likedTweet);
    } catch (error) {
      console.error(error.stack);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(404).json({ error: "Tweet not found" });
  }
});

export default router;
