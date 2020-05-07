import React from 'react';
import { PropTypes } from 'prop-types';

export default function ProductDetails(props) {
    return (
        <div>
            <img src={props.url} alt={props.productname} />
            <p>{props.productname}</p>
        </div>
    )
}

ProductDetails.prototype = {
    url: PropTypes.string.isRequired,
    productname: PropTypes.string
}