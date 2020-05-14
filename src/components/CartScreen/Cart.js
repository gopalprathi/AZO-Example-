import React from 'react';
import {connect} from 'react-redux';

function Cart(props) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="row">
                {
                    props.cart?
                    props.cart.map((product)=>{
                    return (
                        <div className="col-md-4" key={product.autopart.key}>
                            <img src={product.autopart.imgurl} alt={product.autopart.partname} />
                            <p>{product.autopart.partname}</p>
                            <p>Qty: <input type="text" value={product.quantity} /> </p>
                        </div>
                        )
                    })
                    :null
                }
            </div>
            {props.cart&&props.cart.length?<div className="row"><button className="btn btn-primary">Confirm Order</button></div>:<h5>Your Cart is Empty! Please add items</h5>}
        </div>
    )
}


const mapStateToProps = ({cart}) => ({cart});
export default connect(mapStateToProps, {})(Cart);