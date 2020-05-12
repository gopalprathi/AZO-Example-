import React from 'react';
import { PropTypes } from 'prop-types';

export default function ProductDetails(props) {
    return (
        <div className="col-sm-4">
            <img src={props.url} alt={props.productname} />
            <p data-toggle="modal" data-target="#productViewModal" onClick={props.handleProductView}>{props.productname}</p>
        </div>
    )
}

ProductDetails.prototype = {
    url: PropTypes.string.isRequired,
    productname: PropTypes.string
}