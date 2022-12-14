import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import { Provider } from "react-redux";
import { store } from "./store";

import { BrowserRouter as Router } from "react-router-dom";
const root = createRoot(document.getElementById("main"));

root.render(
  <Router>
    <Provider store={store}>
      <Root />
    </Provider>
  </Router>
);
