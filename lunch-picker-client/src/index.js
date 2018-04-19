import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./containers/Root";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

import "./assets/style/reset.css";

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

registerServiceWorker();
