import React from 'react'
import ProductDetails from '../ProductDetails/ProductDetails'

export default function ProductList({productList}) {
    return (
        <div className="row">
            {
                productList?
                productList.map((product)=>{
                return <ProductDetails url={product.imgurl} productname={product.partname} />
            })
            :null
            }
            {productList&&productList.length?null:<h5>Oh Snap!! No result found</h5>}
        </div>
    )
}
