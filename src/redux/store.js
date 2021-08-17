import { createStore } from "redux";
import { updateArr } from "./reducer";

export const store = createStore(updateArr)