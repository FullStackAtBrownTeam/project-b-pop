import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import MyGroups from "./Components/MyGroups";
import Favorites from "./Components/Favorites";
import Profile from "./Components/Profile";
import MainFeed from "./Components/MainFeed";
// import Menu from "./Components/Menu/Menu";

// import ImageCard from "./Components/Common/ImageCard";

function App() {
  // const [open, setOpen] = useState(false);
  const numLikes = 48;
  return (
    <div>
      <NavBar />
      {/* <div>
        <Menu open={open} setOpen={setOpen} />
      </div> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainFeed} />
          <Route path="/groups" exact component={MyGroups} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
      {/* <ImageCard
        username="xchai"
        numLikes={numLikes}
        caption="beach day, shot on Sony Alpha a7"
      ></ImageCard>
      <ImageCard username="jli" numLikes={numLikes}></ImageCard>
      <ImageCard username="briansuti" numLikes={numLikes}></ImageCard>
      <ImageCard username="neilxu" numLikes={numLikes}></ImageCard> */}
    </div>
  );
}

export default App;
