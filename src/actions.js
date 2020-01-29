// Action types
export const SET_FIRSTNUMBER = "SET_FIRSTNUMBER";
export const SET_SECONDNUMBER = "SET_SECONDNUMBER";
export const SET_OPERATOR = "SET_OPERATOR";
export const CALC = "CALC";
export const CLEAR = "CLEAR";

// Action creators

export function setNumber(numberType, addedNumber) {
  if (numberType === 0) {
    return {
      type: SET_FIRSTNUMBER,
      addedNumber
    };
  } else if (numberType === 1) {
    return {
      type: SET_SECONDNUMBER,
      addedNumber
    };
  }
}

export function setOperator(operator) {
  return {
    type: SET_OPERATOR,
    operator
  };
}

export function clearNumbers() {
  return {
    type: CLEAR
  };
}

export function calcResult() {
  return {
    type: CALC
  };
}
