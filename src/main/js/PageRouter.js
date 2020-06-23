import React from "react";
import {Route, Switch} from "react-router-dom";

import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";

export default function PageRouter() {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

