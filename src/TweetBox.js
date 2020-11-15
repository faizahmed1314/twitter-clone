import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/unique-boy-names-edmond-1564113059.jpg?crop=1.00xw:0.752xh;0,0.0145xh&resize=980:*" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional : Enter image Url"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
