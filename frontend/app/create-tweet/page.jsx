"use client";
import { useState } from "react";
import axios from "axios";
import Form from "@components/Form";
import { useRouter } from "next/navigation";
const CreateTweet = () => {
  const router = useRouter();
  // State for form data
  const [tweet, setTweet] = useState({
    username: "",
    text: "",
  });
  // State to manage btn disable status
  const [submitting, setSubmitting] = useState(false);

  // Handle form submission
  const handleCrate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post("http://localhost:5000/tweets", {
        username: tweet.username,
        text: tweet.text,
      });
      router.push("/tweets");
    } catch (error) {
      console.error("Failed to create tweet:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <Form tweet={tweet} setTweet={setTweet} submitting={submitting} handleSubmit={handleCrate} />
    </section>
  );
};

export default CreateTweet;
