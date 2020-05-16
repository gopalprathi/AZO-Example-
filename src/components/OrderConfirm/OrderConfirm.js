import React from 'react';
import {connect} from 'react-redux';

function OrderConfirm(props) {
    const deliveryDate = () => {
        var date = new Date();
        date.setDate(date.getDate() + 3);
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        return dd + '/'+ mm + '/'+ yyyy;
    }

    return (
        <div className="m-4">
            <h1>Order Confirmed</h1>
            <div className="row">
                {
                    props.cart&&props.cart.length?
                    props.cart.map((product)=>{
                    return (
                        <div className="col-md-4" key={product.autopart.key}>
                            <img src={product.autopart.imgurl} alt={product.autopart.partname} />
                            <p>{product.autopart.partname}</p>
                            <p>Qty: {product.quantity}</p>
                        </div>
                        )
                    })
                    :null
                }
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>Order Will be divered on {deliveryDate()}</p>
                    <h5>From Store:</h5>
                    <p>SUMMER AVE</p>
                    <p>MEMPHIS, TN 88888</p>
                    <p>(901) 4444-777</p>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({cart}) => ({cart});
export default connect(mapStateToProps, {})(OrderConfirm);