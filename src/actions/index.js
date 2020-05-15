export const addToCart = (autopart, quantity) => ({type:'ADD_TO_CART', payload: {autopart, quantity}});
export const closeModal = () => ({type:'CLOSE_MODAL'});
export const showModal = () => ({type:'SHOW_MODAL'});