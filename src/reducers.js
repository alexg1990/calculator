import {
    DEFINE_NUMBER
} from './actions.js';

const initialState = {
    number: 0
}

function calculate(state = initialState, action) {
    switch (action.type) {
        case DEFINE_NUMBER:
            return {
                number: action.payload
            };
        default:
            return state;
    }
}

export default calculate;