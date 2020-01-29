import {
  SET_FIRSTNUMBER,
  SET_SECONDNUMBER,
  SET_OPERATOR,
  CALC,
  CLEAR
} from "./actions.js";

const initialState = {
  display: "firstNumber",
  firstNumber: "",
  secondNumber: "",
  operator: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIRSTNUMBER:
      return {
        firstNumber: state.firstNumber + action.addedNumber
      };
    case SET_SECONDNUMBER:
      return {
        secondNumber: state.secondNumber + action.addedNumber,
          display: "secondNumber"
      };
    case SET_OPERATOR:
      return {
        operator: action.operator,
          display: "operator"
      };
    case CALC:
      return {
        firstNumber: calcResult(state.firstNumber, state.secondNumber, state.operator),
          display: "firstNumber"
      };
    case CLEAR:
      return {
        initialState
      };
    default:
      return state;
  }
}

function calcResult(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return parseInt(firstNumber) + parseInt(secondNumber);
    case "-":
      return parseInt(firstNumber) - parseInt(secondNumber);
    case "*":
      return parseInt(firstNumber) * parseInt(secondNumber);
    case "/":
      return parseInt(firstNumber) / parseInt(secondNumber);
  }
}

export default reducer;