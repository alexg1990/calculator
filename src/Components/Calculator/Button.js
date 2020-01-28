import React from "react";

import { connect } from "react-redux";
import { defineNumber } from "../../actions.js";

let Button = function(props) {
  const handleClick = e => {
    props.dispatch(defineNumber(e.target.getAttribute("value")));
    // console.log("hi");
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
    number: state.number
  };
};

export default connect(mapStateToProps)(Button);
