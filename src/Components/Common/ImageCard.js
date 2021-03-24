import React, { useState } from "react";
import UserIcon from "../../Assets/ImageCard/PlaceholderProfilePic.jpg";
import ThumbImage from "../../Assets/ImageCard/PlaceholderThumbnail.jpg";
import Heart from "./Heart.js";
import "../css/card.css";

function ImageCard(props) {
  const [heartActive, setHeartActive] = useState(false);

  return (
    <div className="imageCard">
      <div className="userInfo">
        <img src={UserIcon}></img>
        <p>{props.username}</p>
      </div>
      {/* placeholder for carousel */}
      <img src={ThumbImage}></img>
      {/* placeholder for caption information */}
      <Heart isActive={heartActive} onClick={() => setHeartActive(!heartActive)}></Heart>
      <div className="postInfo"></div>
    </div>
  );
}

export default ImageCard;
