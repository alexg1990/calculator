import {
  DEFINE_NUMBER
} from "./actions.js";

const initialState = {
  number: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DEFINE_NUMBER:
      return {
        number: state.number + action.addedNumber
      };
    default:
      return state;
  }
}

export default reducer;