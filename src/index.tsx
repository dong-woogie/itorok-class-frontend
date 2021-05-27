import { loadableReady } from "@loadable/component";
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

loadableReady(() =>
  ReactDom.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  )
);
