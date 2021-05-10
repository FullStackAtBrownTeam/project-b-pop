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
import ThumbImage from "./../Assets/ImageCard/PlaceholderThumbnail.jpg";
import Img2 from "../Assets/ImageCard/Tetonspring.jpeg";
import Img3 from "../Assets/ImageCard/Pretty-Pictures-Fall.jpeg";
import Img4 from "../Assets/ImageCard/brown-football.png";
import Img5 from "../Assets/ImageCard/paris.jpeg";
import Img6 from "../Assets/ImageCard/doodle.jpeg";
import Img7 from "../Assets/ImageCard/Aquamarine.jpg";
import Img8 from "../Assets/ImageCard/providence.jpeg";

//import { PrivateRoute } from "../App";

const MainFeed = (props) => {
  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div className="masonryDiv">
          <ImageCard
            username="xchai"
            postImage={Img2}
            numLikes={3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="neil_x"
            numLikes={3}
            postImage={ThumbImage}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="Jess.ie"
            numLikes={3}
            postImage={Img3}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="xchai"
            numLikes={3}
            postImage={Img4}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="BrianS"
            numLikes={3}
            postImage={Img5}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="Jess.ie"
            numLikes={3}
            postImage={Img6}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="N.Young"
            numLikes={3}
            postImage={Img7}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
        <div className="masonryDiv">
          <ImageCard
            username="C_Paxx"
            numLikes={3}
            postImage={Img8}
            caption="beach day, shot on Sony Alpha a7"
          ></ImageCard>
        </div>
      </Masonry>
    </div>
  );
};
export default MainFeed;
