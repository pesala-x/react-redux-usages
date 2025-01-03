import {Customer} from "../models/Customer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState : Customer[] = [];
// export function CustomerReducer(state=initialState, action:{type:string, payload:Customer}){
//     switch(action.type){
//         case 'ADD_CUSTOMER':
//             return [...state, action.payload];
//         case 'UPDATE_CUSTOMER':
//             return state.map((customer: Customer) =>
//                 customer.email === action.payload.email ?
//                     {...customer, name : action.payload.name, email : action.payload.email, phone : action.payload.phone }
//                     : customer
//             );
//         case 'DELETE_CUSTOMER':
//             return state.slice(0,-1);
//         default:
//             return state;
//     }
// }

// Create the slice
const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer(state, action: PayloadAction<Customer>) {
            state.push(action.payload);
        },
        updateCustomer(state, action: PayloadAction<Customer>) {
            return state.map(customer =>
                customer.email === action.payload.email
                    ? { ...customer, ...action.payload }
                    : customer
            );
        },
        deleteCustomer(state) {
            return state.slice(0, -1);
        },
    },
});

// Export actions and reducer
export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;