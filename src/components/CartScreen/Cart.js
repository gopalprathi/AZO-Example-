import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeProductQuantity} from '../../actions';

function Cart(props) {
    return (
        <div className="m-4">
            <h1>Shopping Cart</h1>
            <div className="row">
                {
                    props.cart?
                    props.cart.map((product)=>{
                    return (
                        <div className="col-md-4" key={product.autopart.key}>
                            <img src={product.autopart.imgurl} alt={product.autopart.partname} />
                            <p>{product.autopart.partname}</p>
                            <p>Qty: <input type="number" 
                                defaultValue={product.quantity} 
                                data-key={product.autopart.key} 
                                onChange={(event)=>props.changeProductQuantity(event.target.dataset.key, event.target.value)}/> </p>
                        </div>
                        )
                    })
                    :null
                }
            </div>
            {props.cart&&props.cart.length?<div className="row"><Link to='/confirmed' className="btn btn-primary">Confirm Order</Link></div>:<h5>Your Cart is Empty! Please add items</h5>}
        </div>
    )
}


const mapStateToProps = ({cart}) => ({cart});
export default connect(mapStateToProps, {changeProductQuantity})(Cart);