import { combineReducers } from "redux";
import { modalReducer, updateArr } from "./reducer";

export  const reducers = combineReducers({
    state1:updateArr,
    state2:modalReducer
})

