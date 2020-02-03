import React from "react";
import { connect } from "react-redux";

import {
  calcResult,
  clearNumbers,
  setNumber,
  setOperator
} from "../../actions.js";

let Button = function(props) {
  const handleClick = e => {
    switch (props.type) {
      case "number":
        if (props.operator === null) {
          props.dispatch(setNumber(0, e.target.getAttribute("value")));
        } else {
          props.dispatch(setNumber(1, e.target.getAttribute("value")));
        }
        break;
      case "operation":
        props.dispatch(setOperator(e.target.getAttribute("value")));
        break;
      case "clear":
        props.dispatch(clearNumbers());
        break;
      case "result":
        props.dispatch(calcResult());
        break;
      default:
        props.dispatch(clearNumbers());
    }
  };
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
      onClick={handleClick}
      value={props.value}
    >
      {props.value}
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

export default connect(mapStateToProps)(Button);
