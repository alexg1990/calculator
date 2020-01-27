import { DEFINE_NUMBER } from "./actions.js";

const initialState = {
  number: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case DEFINE_NUMBER:
      return {
        number: action.addedNumber
      };
    default:
      return state;
  }
}

export default reducer;
