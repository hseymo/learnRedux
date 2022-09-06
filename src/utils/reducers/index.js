import colorReducer from "./colorReducer";
import countReducer from "./countReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: countReducer,
    colorSelect: colorReducer
})

export default rootReducer;