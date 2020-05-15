
const initialState = {cart:[], modalShow:false}
const rootReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            if(action.payload.quantity > 0){
                alert(action.payload.autopart.partname + ' Successfully added to cart');
                return {...state, modalShow:false, cart:[...state.cart, {autopart:action.payload.autopart, quantity:action.payload.quantity}]}
            }else{
                alert('Please select one or more qualtity');
                return {...state};
            }
        case 'SHOW_MODAL':
            return {...state, modalShow:true}

        case 'CLOSE_MODAL':
            return {...state, modalShow:false}
        
        default:
            return {...state}
    }

}

export default rootReducer;