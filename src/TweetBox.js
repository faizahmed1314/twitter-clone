import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "faiz Ahmed",
      username: "devFaiz",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/unique-boy-names-edmond-1564113059.jpg?crop=1.00xw:0.752xh;0,0.0145xh&resize=980:*",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/unique-boy-names-edmond-1564113059.jpg?crop=1.00xw:0.752xh;0,0.0145xh&resize=980:*" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          placeholder="Optional : Enter image Url"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
