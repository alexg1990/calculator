import React from "react";

let Screen = function(props) {
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
      {props.number}
    </div>
  );
};

export default Screen;
