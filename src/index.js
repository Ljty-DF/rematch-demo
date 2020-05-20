import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import * as models from "./models";

import App from "./App";
let store = init({ models });
console.log(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
