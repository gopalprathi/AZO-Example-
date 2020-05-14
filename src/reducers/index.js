
const initialState = {cart:[]}
const rootReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            alert(action.payload.partname + ' Successfully added to cart');
            return {...state, cart:[...state.cart, {autopart:action.payload.autopart, quantity:action.payload.quantity}]}
        default:
            return {...state}
    }

}

export default rootReducer;