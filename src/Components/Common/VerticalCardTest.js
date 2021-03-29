import React, { useState } from "react";
import UserIcon from "../../Assets/ImageCard/PlaceholderProfilePic.jpg";
import ThumbImage from "../../Assets/ImageCard/Tetonspring.jpeg";
import Heart from "./Heart.js";
import "../css/card.css";

function VerticalImageCard(props) {
  const [heartActive, setHeartActive] = useState(false);

  return (
    <div className="imageCard">
      <div className="userInfo">
        <img className="profilePic" src={UserIcon}></img>
        {props.username}
      </div>
      {/* placeholder for carousel */}
      <img className="postImage" src={ThumbImage}></img>
      {/* placeholder for caption information */}
      <div className="likes">
        <Heart
          isActive={heartActive}
          onClick={() => setHeartActive(!heartActive)}
        ></Heart>
        {props.numLikes} likes
      </div>
      <div className="postInfo">{props.caption}</div>
    </div>
  );
}

export default VerticalImageCard;
