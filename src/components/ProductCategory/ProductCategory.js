import React from 'react';
import { PropTypes } from 'prop-types';

export default function ProductCategory({productCategoryList}) {
    return (
        <div>
            <h5>Product Categories</h5>
            {
                productCategoryList?productCategoryList.map((item)=><p key={item}>{item}</p>):null
            }
        </div>
    )
}

ProductCategory.prototype = {
    url: PropTypes.string.isRequired,
    productname: PropTypes.string
}