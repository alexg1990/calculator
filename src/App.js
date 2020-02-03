import React from "react";
import { Provider } from "react-redux";

import Calculator from "./Components/Calculator/Calculator.js";
import store from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Calculator></Calculator>
    </Provider>
  );
};

export default App;
