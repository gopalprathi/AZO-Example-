import React from 'react';
import ProductCategory from '../ProductCategory/ProductCategory';
import Header from '../Header/Header';

class Home extends React.Component {
    constructor(){
        super();
        this.state = { ProductCategoryList : [
                {
                    'ProductCategoryHeading': 'Batteries',
                    'ProductCategoryItemList': [
                            'Battery',
                            'Specialty Automotive Batery',
                            'Truck Battery',
                    ]
                },
                {
                    'ProductCategoryHeading':'Marine',
                    'ProductCategoryItemList': ['Marine Battery']
                },
                {
                    'ProductCategoryHeading':'Lawn and Garden',
                    'ProductCategoryItemList': ['Lawn & Garden Battery']
                },
                {
                    'ProductCategoryHeading':'Motorcycle',
                    'ProductCategoryItemList': ['Power Sport Battery']
                },
                {
                    'ProductCategoryHeading':'Starting and Charging Testing and Specialty Tools',
                    'ProductCategoryItemList': ['Power Sport Battery']
                }
            ],
        }
    }

    render() {
        return (
            <>
                <Header />
                <div id="homeContainer" style={{display:'none'}}>
                    <ProductCategory productCategoryList={this.state.ProductCategoryList}/>
                </div>
            </>
        );
    }
}
export default Home;