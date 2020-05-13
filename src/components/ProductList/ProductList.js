import React from 'react'
import ProductDetails from '../ProductDetails/ProductDetails'

export default function ProductList({productList, handleProductView}) {
    return (
        <div className="row">
            {
                productList?
                productList.map((product)=>{
                return <ProductDetails  key={product.key} url={product.imgurl} productname={product.partname} handleProductView={handleProductView} />
                })
                :null
            }
            {productList&&productList.length?null:<h5>Oh Snap!! No result found</h5>}
        </div>
    )
}
