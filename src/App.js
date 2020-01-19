import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: []
    };
  }

  render() {
    return <Calculator></Calculator>;
  }
}

export default App;

let Screen = function() {
  return (
    <div
      style={{
        display: "flex",
        background: "black",
        color: "white",
        outline: "1px solid black",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: "1",
        fontSize: "40px"
      }}
    >
      0
    </div>
  );
};

let Button = function(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        outline: "1px black solid",
        flex: props.size === "large" ? 2 : 1,
        justifyContent: "center",
        background:
          props.type === "number"
            ? "#4d4d4d"
            : props.type === "operation"
            ? "rgb(102, 102, 102)"
            : props.type === "result"
            ? "rgb(0, 68, 102)"
            : "rgb(172, 57, 57)"
      }}
      value={props.value}
    >
      {props.value}
    </div>
  );
};

let Calculator = function(props) {
  return (
    <div
      className="container"
      style={{
        height: "600px",
        width: "500px",
        margin: "auto",
        flexDirection: "column"
      }}
    >
      <Screen></Screen>
      <div
        style={{
          display: "flex",
          outline: "1px black solid",
          flex: "5"
        }}
      >
        <div
          className="container"
          style={{
            flexDirection: "column",
            flex: "3"
          }}
        >
          <div className="container" style={{ flex: 1 }}>
            <Button value="AC" size="large"></Button>
            <Button value="/" type="operation"></Button>
          </div>
          <div className="container" style={{ flex: 1 }}>
            <Button value="7" type="number"></Button>
            <Button value="8" type="number"></Button>
            <Button value="9" type="number"></Button>
          </div>
          <div className="container" style={{ flex: 1 }}>
            <Button value="4" type="number"></Button>
            <Button value="5" type="number"></Button>
            <Button value="6" type="number"></Button>
          </div>
          <div className="container" style={{ flex: 1 }}>
            <Button value="1" type="number"></Button>
            <Button value="2" type="number"></Button>
            <Button value="3" type="number"></Button>
          </div>
          <div className="container" style={{ flex: 1 }}>
            <Button value="0" size="large" type="number"></Button>
            <Button value="." type="number"></Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1"
          }}
        >
          <Button value="x" type="operation"></Button>
          <Button value="-" type="operation"></Button>
          <Button value="+" type="operation"></Button>
          <Button value="=" size="large" type="result"></Button>
        </div>
      </div>
    </div>
  );
};
