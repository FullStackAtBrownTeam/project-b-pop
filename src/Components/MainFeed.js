import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "bootstrap/dist/css/bootstrap.css";
import Masonry from "react-masonry-css";

import BLogo from "./b.png";
import ImageCard from "./Common/ImageCard";
import VerticalImageCard from "./Common/VerticalCardTest";
//import { PrivateRoute } from "../App";

const MainFeed = (props) => {
  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="masonryDiv">
          <VerticalImageCard
            username="xchai"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></VerticalImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="neil_x"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="Jess.ie"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="xchai"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="BrianS"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <VerticalImageCard
            username="Jess.ie"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></VerticalImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="N.Young"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="C_Paxx"
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
      </Masonry>
    </div>
  );
};
export default MainFeed;
