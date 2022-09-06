import colorReducer from "./colorReducer";
import countReducer from "./countReducer";
import { combineReducers } from "redux";

// const initialState = {
//     counter: 0, 
//     colorSelect: '#ADD8E6'
// }

// const countReducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'INCREMENT':
//             return {...state.counter += 1};
//         case 'DECREMENT':
//             return {...state.counter -= 1};
//         case 'RESET_COUNT':
//             return {...state.counter = 0};
//         default:
//             return state.counter;
//     }
// }

// const colorReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'CHANGE_COLOR':
//             return {...state.colorSelect = action.payload.color};
//         case 'RESET_COLOR':
//             return {...state.colorSelect = 'ADD8E6'};
//         default:
//             return state.colorSelect;
//     }
// }


const rootReducer = combineReducers({
    counter: countReducer,
    colorSelect: colorReducer
})

export default rootReducer;