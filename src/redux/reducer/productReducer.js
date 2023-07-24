
// const counterReducer=(state = 0,action)=>{
// switch(action.type){
//         case "INCREMENT":
//         return state+1;
//         case "DECREMENT":
//         return state-1;
//         case "RESET":
//         return state=0;
//         default:https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2Fnew-story&source=---two_column_layout_nav-----------------------new_post_topnav-----------
//             return state;
//     }
// }
// export default counterReducer;
import { ActionTypes } from "../constants/action-types";
import { ADD_TO_CART } from "../action/productActions";
import Cookies from 'js-cookie';
const initialstate={
    products:[],
    addedItems:[],
    total:0
}

export const productReducer=(state=initialstate,{type,payload})=>{
switch (type) {
    case ActionTypes.SET_PRODUCTS:
        console.log(payload);
        return { ...state,products:payload } ;
       
    default:
        return state;
}
};
export const selectedProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return{...state,...payload};
             case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return{};
        default:
           return state;
    }
};

export const cartReducer=(state=initialstate,{type,payload,Id})=>{
    console.log("addedItem")
    console.log(Id);
    console.log(payload);
    var addeditem=state.addedItems;
    Cookies.set(
            "Cartitem",
            // JSON.stringify([...state.cartItem, action.payload]),
            JSON.stringify([...addeditem,payload]),
            {
              expires: 7,
            }
    );
     switch(type){
        case ActionTypes.ADD_TO_CART: 
            console.log(payload);
            console.log(state);
            console.log(Id);
            // we convert type of 'Id' string to integer so 'find function' fetch Id 
            const x = parseInt(Id)
            const addedarray = [];
            let addedItem = state.products.find(item=>item.id === x);
            addedarray.push(addedItem);
            console.log(addedarray)
            console.log(addedItem)  
            localStorage.setItem("LocalCart",JSON.stringify(addedarray));
            console.log(typeof (state.addedItems))
            console.log(state.products)
            console.log(state.addedItems)

            return { ...state,products:payload,
            addedItems:addedItem
            };
            default:
                console.log("heelllo");
                     return state;
    }

//     if(ActionTypes===ADD_TO_CART){
//         const x = parseInt(Id)
//     let addedItem = state.products.find(item=> item.id===x)
//     console.log(addedItem)
//     console.log(state);
//     let existed_item=state.addedproducts.find(item=> x===item.id)     
//     if(existed_item)
//    {
//     addedItem.quantity += 1
//     return{
//         ...state,
//         total: state.total + addedItem.price
//     }
//    }
//    else{
//     addedItem.quantity=1;
//     let newTotal = state.total + addedItem.price
//     return{
//         ...state,products:payload,
//         addedproducts:[...state.addedItems,addedItem],
//         total : newTotal
//     }
//    }
// }
// else{
//     return state
// }


}
