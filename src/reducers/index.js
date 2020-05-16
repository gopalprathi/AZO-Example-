
const initialState = {cart:[], modalShow:false}
const rootReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            if(action.payload.quantity > 0){
                alert(action.payload.autopart.partname + ' Successfully added to cart');

                //If autopart already added in cart change only quantity else add part in cart
                if(state.cart.find(item => item.autopart.key === action.payload.autopart.key)){
                    let updatedCart = state.cart.map((item)=>{
                        if(item.autopart.key === action.payload.autopart.key){
                            item.quantity = parseInt(item.quantity) + parseInt(action.payload.quantity)
                        }
                        return item;
                    });
                    return {...state, modalShow:false, cart:updatedCart}
                }else{
                    return {...state, modalShow:false, cart:[...state.cart, {autopart:action.payload.autopart, quantity:action.payload.quantity}]}
                }
            }else{
                alert('Please select one or more qualtity');
                return {...state};
            }

        case 'CHANGE_QUANTITY':
            let updatedCart = state.cart.map((item)=>{
                if(item.autopart.key === parseInt(action.payload.key)){
                    item.quantity = parseInt(action.payload.quantity)
                    console.log('Quantity updated '+item.quantity);
                }
                return item;
            });
            return {...state, cart:updatedCart}

        case 'SHOW_MODAL':
            return {...state, modalShow:true}

        case 'CLOSE_MODAL':
            return {...state, modalShow:false}
        
        default:
            return {...state}
    }

}

export default rootReducer;