import {configureStore} from "@reduxjs/toolkit";
import CountReducer from "../reducers/CountReducer.ts";
export const store = configureStore({
    reducer:{
        counter: CountReducer
    }
})