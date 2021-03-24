import React from "react";
import SolidHeart from "../../Assets/ImageCard/heart-solid.svg";
import EmptyHeart from "../../Assets/ImageCard/heart-regular.svg";

// isActive, onClick
function Heart(props) {
  return (
    <div>
      {props.isActive ? (
        <img src={SolidHeart} onClick={props.onClick}></img>
      ) : (
        <img src={EmptyHeart} onClick={props.onClick}></img>
      )}
    </div>
  );
}

export default Heart;
