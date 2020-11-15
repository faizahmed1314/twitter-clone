import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Home</h1>
      </div>

      <TweetBox />
      <Post />
    </div>
  );
}

export default Feed;
