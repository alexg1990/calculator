import React from "react";
import { connect } from "react-redux";

import Button from "./Button";
import Screen from "./Screen";

const Calculator = function(props) {
  function setDisplayValue(displayValue) {
    switch (displayValue) {
      case "firstNumber":
        return props.firstNumber;
      case "secondNumber":
        return props.secondNumber;
      case "operator":
        return props.operator;
      default:
        return props.firstNumber;
    }
  }
  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        maxWidth: "500px",
        margin: "auto",
        flexDirection: "column"
      }}
    >
      <Screen displayValue={setDisplayValue(props.display)} />
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
            <Button value="AC" size="large" type="clear"></Button>
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

const mapStateToProps = state => {
  return {
    display: state.display,
    firstNumber: state.firstNumber,
    secondNumber: state.secondNumber,
    operator: state.operator
  };
};

export default connect(mapStateToProps)(Calculator);
