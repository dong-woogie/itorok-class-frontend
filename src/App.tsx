import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import { Helmet } from "react-helmet-async";
import Favicon from "./image/favicon_32x32.ico";
import "./styles/styles.css";

const HomePage = loadable(() => import("./pages/Home"));
const PostPage = loadable(() => import("./pages/Post"));

function App() {
  return (
    <>
      <Helmet>
        <title>itorok class</title>
        <link rel="shortcut icon" href={Favicon}></link>
      </Helmet>
      <Link to="/">
        <li className="bg-blue-200 text-white">HOME</li>
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
