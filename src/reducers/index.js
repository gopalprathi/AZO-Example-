
const initialState = {cart:[]}
const rootReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            alert(action.payload.partname + ' Successfully added to cart');
            return {...state, cart:[...state.cart, action.payload]}
        default:
            return {...state}
    }

}

export default rootReducer;