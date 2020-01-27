import React from "react";
import { Provider } from "react-redux";

import Calculator from "./Components/Calculator/Calculator.js";
import store from "./store";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }
  componentDidMount() {
    let requestTime = new Date();
    let requestTimeMinutes = requestTime.getSeconds();
    this.setState({
      requestTime: requestTimeMinutes,
      currentTime: requestTimeMinutes
    });
  }
  shouldComponentUpdate(prevState, newState) {
    if (prevState.currentTime !== newState.currentTime) {
      return true;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Calculator></Calculator>
      </Provider>
    );
  }
}

export default App;
