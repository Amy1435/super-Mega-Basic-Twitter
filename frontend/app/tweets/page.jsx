"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import TweetCard from "@components/TweetCard";
const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  // Get Tweets from Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/tweets");
        setTweets(response.data);
      } catch (error) {
        console.error("Failed to fetch tweets:", error);
      }
    };
    fetchData();
  }, []);

  const handleLike = async (id) => {
    try {
      await axios.post(`http://localhost:5000/tweets/${id}/like`);
      // Refresh the list of tweets
      const response = await axios.get("http://localhost:5000/tweets");
      setTweets(response.data);
    } catch (error) {
      console.error("Failed to fetch tweets:", error);
    }
  };

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6">
        <div className="text-white flex flex-col items-center text-center gap-4">
          <h1 className="font-outfit font-semibold text-4xl capitalize text-white sm:font-bold sm:text-4xl md:text-6xl lg:text-7xl">
            Tutti i Tweets
          </h1>
          <p className="text-white font-roboto-100 md:text-lg lg:text-xl">
            Scopri cosa dicono le persone e lascia un like se ti piace il tweet.
          </p>
        </div>
        <div>
          {tweets && tweets.length > 0 ? (
            <div>
              <TweetCard tweets={tweets} handleLike={handleLike} />
            </div>
          ) : (
            <div>
              <p>Loading...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tweets;
