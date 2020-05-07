import React from 'react';
import ProductCategory from '../ProductCategory/ProductCategory';
import Header from '../Header/Header';
import './Home.css'

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
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="category-section">
                                <ProductCategory productCategoryList={this.state.ProductCategoryList}/>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <p>Product list will come here</p>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    }
}
export default Home;