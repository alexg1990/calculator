import React from "react";
import { connect } from "react-redux";

import Button from "./Button";
import Screen from "./Screen";
import { defineNumber } from "../../actions.js";

const Calculator = function(props) {
  const handleClick = e => {
    console.log(e.target.value);
    props.dispatch(defineNumber(5));
    // console.log("hi");
  };
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
      <Screen number={props.number} />
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
            <Button
              value="7"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
            <Button
              value="8"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
            <Button
              value="9"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
          </div>
          <div className="container" style={{ flex: 1 }}>
            <Button
              value="4"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
            <Button
              value="5"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
            <Button
              value="6"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
          </div>
          <div className="container" style={{ flex: 1 }}>
            <Button
              value="1"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
            <Button
              value="2"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
            <Button
              value="3"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
          </div>
          <div className="container" style={{ flex: 1 }}>
            <Button
              value="0"
              size="large"
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
            <Button
              value="."
              type="number"
              onClick={e => handleClick(e)}
            ></Button>
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
    number: state.number
  };
};

export default connect(mapStateToProps)(Calculator);
