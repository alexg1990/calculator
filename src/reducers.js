import {
  SET_FIRSTNUMBER,
  SET_SECONDNUMBER,
  SET_OPERATOR,
  CALC,
  CLEAR
} from "./actions.js";

const initialState = {
  display: "firstNumber",
  firstNumber: 0,
  secondNumber: 0,
  operator: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIRSTNUMBER:
      return Object.assign({}, state, {
        firstNumber: state.firstNumber * 10 + parseInt(action.addedNumber)
      });
    case SET_SECONDNUMBER:
      return Object.assign({}, state, {
        secondNumber: state.secondNumber * 10 + parseInt(action.addedNumber),
        display: "secondNumber"
      });
    case SET_OPERATOR:
      return Object.assign({}, state, {
        operator: action.operator,
        display: "operator"
      });
    case CALC:
      return Object.assign({}, state, {
        display: "firstNumber",
        firstNumber: calcResult(
          state.firstNumber,
          state.secondNumber,
          state.operator
        ),
        secondNumber: 0,
        operator: null
      });
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}

function calcResult(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    default:
      return firstNumber;
  }
}

export default reducer;
