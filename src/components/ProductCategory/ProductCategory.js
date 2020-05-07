import React from 'react';
import { PropTypes } from 'prop-types';

export default function ProductCategory({productCategoryList}) {
    return (
        <div>
            <h2>Category</h2>
            {
                productCategoryList.map((item)=>{
                    return (
                        <div key={item.ProductCategoryHeading}>
                            <p>{item.ProductCategoryHeading}</p>
                            <ul>
                                {item.ProductCategoryItemList.map(listItem=><li key={listItem}>{listItem}</li>)}
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    )
}

ProductCategory.prototype = {
    url: PropTypes.string.isRequired,
    productname: PropTypes.string
}