import React from "react";

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
      onClick={props.onClick}
      value={props.value}
    >
      {props.value}
    </div>
  );
};

export default Button;
