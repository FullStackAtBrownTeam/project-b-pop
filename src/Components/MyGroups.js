import React, { useState, useEffect } from "react";
import Masonry from 'react-masonry-css';
//import axios from "axios";

const MyGroups = (props) => {
  return (
    <div>
      {/* <div className="featuredRow">
        <h1>My Groups</h1>

      </div> */}
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <div className = "masonryDiv">
          <h1>Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! </h1>
        </div>
        <div className = "masonryDiv">
          <h1>Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! </h1>
        </div>
        <div className = "masonryDiv">
          <h1>Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! </h1>
        </div>
        <div className = "masonryDiv">
          <h1>HHello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! Hello! </h1>
        </div>
        <div className = "masonryDiv">
          <h1>HHello! Hello! Hello! Hello! Hello! Hello! </h1>
        </div>
        <div className = "masonryDiv">
          <h1>Hello!</h1>
        </div>
        <div className = "masonryDiv">
          <h1>Hello!</h1>
        </div>
        <div className = "masonryDiv">
          <h1>Hello!</h1>
        </div>
      </Masonry>
    </div>

  );
};
export default MyGroups;
