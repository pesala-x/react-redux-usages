import {configureStore} from "@reduxjs/toolkit";
import CustomerReducer from "../reducers/CustomerReducer.ts";
export const store = configureStore({
    reducer:{
        customerAdd : CustomerReducer
        // counter: CountReducer
    }
})