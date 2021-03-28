import React from "react";
import SolidHeart from "../../Assets/ImageCard/heart-solid.svg";
import EmptyHeart from "../../Assets/ImageCard/heart-regular.svg";

// isActive, onClick
function Heart(props) {
  return (
    <div>
      {props.isActive ? (
        <img class="heart" src={SolidHeart} onClick={props.onClick}></img>
      ) : (
        <img class="heart" src={EmptyHeart} onClick={props.onClick}></img>
      )}
    </div>
  );
}

export default Heart;
