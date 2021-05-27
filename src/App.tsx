import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./pages/Home"));
const PostPage = loadable(() => import("./pages/Post"));

function App() {
  return (
    <>
      <Link to="/">
        <li>HOME</li>
      </Link>
      <Link to="/post">
        <li>POST</li>
      </Link>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/post">
          <PostPage name="woogie" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
