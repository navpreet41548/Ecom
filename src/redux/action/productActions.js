// export const increment=()=>{
// return{
// type:"INCREMENT",
// };
// };
// export const decrement=()=>{
//     return {
//     type:"DECREMENT",
//     };
//     };
//     export const login=()=>{
//         return{
//         type:"LOG_IN",
//         };
//         };
//         export const reset=()=>{
//             return{
//             type:"RESET",
//             };

import { ActionTypes } from "../constants/action-types";
export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};
export const selectedProduct=(product)=>{
    return{
    type:ActionTypes.SELECTED_PRODUCTS,
    payload:product,
    };
};
export const removeSelectedProduct=()=>{
    return{
    type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
export const ADD_TO_CART=(products,Id)=>{
    console.log(products);
    console.log(Id);
    return{
        type:ActionTypes.ADD_TO_CART,
        Id,
        payload:products,
    }
}