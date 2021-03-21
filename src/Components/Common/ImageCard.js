import React from "react";

function ImageCard(props) {
  return (
    <div className="imageCard">
      <div className="userInfo">
        <img src={props.userIcon}></img>
        <h5>{props.username}</h5>
      </div>
      // placeholder for carousel
      <img src={props.thumbImage}></img>
      // placeholder for caption information
      <div className="postInfo"></div>
    </div>
  );
}

export default ImageCard;
