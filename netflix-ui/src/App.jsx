import React from "react";
import Login from "./pages/Login";
import Logout from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Movies from "./pages/Movies";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Logout />} />
          <Route exact path="/" element={<Netflix />} />
          <Route exact path="player" element={<Player />} />
          <Route exact path={"/movies"} element={<Movies />} />
          <Route exact path={"/tv"} element={<TVShows />} />
          <Route exact path={"/mylist"} element={<UserLiked />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
