import { createStore } from "redux";
import {CountReducer} from "../reducers/CountReducer.ts";
export const store = createStore(CountReducer);
