import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avater }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/unique-boy-names-edmond-1564113059.jpg?crop=1.00xw:0.752xh;0,0.0145xh&resize=980:*" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Faiz Ahmed
              <span>
                <VerifiedUserIcon className="post__badge" /> @devFaiz
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a Twitter clone</p>
          </div>
        </div>
        <img src="https://lh6.googleusercontent.com/spIEOmjv4eXzQDVha4LeBliW4J2RjxYpO3nLbpHnpYFo9YhTxZr_Gj7Ugl6G-IQFKHb2FFk5mYRNhGmL_yyavZTNDiFodS9WbfHEelGVq-ZuFSZi67X8prhawKSN70bxigq8" />
      </div>
      <div className="post__footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small" />
        <PublishIcon fontSize="small" />
      </div>
    </div>
  );
}

export default Post;
