import React from 'react';
import {connect} from 'react-redux';
import ProductDetails from '../ProductDetails/ProductDetails';

function Cart(props) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="row">
                {
                    props.cart?
                    props.cart.map((product)=>{
                    return <ProductDetails  key={product.key} url={product.imgurl} productname={product.partname} handleProductView={()=>{}} />
                    })
                    :null
                }
                {props.cart&&props.cart.length?null:<h5>Your Cart is Empty! Please add items</h5>}
            </div>
        </div>
    )
}


const mapStateToProps = ({cart}) => ({cart});
export default connect(mapStateToProps, {})(Cart);