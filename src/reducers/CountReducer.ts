const initialState = {
    count: 0,
    isVisible: true,
};
//
// export const CountReducer = (
//     state = initialState,
//     action: { type: string, payload?: any }
// ) => {
//     switch (action.type) {
//         case 'ADD_COUNT':
//             return { ...state, count: state.count + 1 };
//         case 'DELETE_COUNT':
//             return { ...state, count: state.count - 1 };
//         case 'TOGGLE':
//             return { ...state, isVisible: !state.isVisible };
//         default:
//             return state;
//     }
// };

import {createSlice} from "@reduxjs/toolkit";

const counterSlice  = createSlice({
    name: "count",
    initialState,
    reducers:{
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        toggleVisible: (state) => {
            state.isVisible = !state.isVisible;
        }
    }
})

export const {increment, decrement,toggleVisible} = counterSlice.actions;
export default counterSlice.reducer;