import React from 'react';
import ProductCategory from '../ProductCategory/ProductCategory';
import ProductList from '../ProductList/ProductList';
import Header from '../Header/Header';
import ProductView from '../ProductView/ProductView';
import './Home.css'
import Service from '../../Service/Service';
import {connect} from 'react-redux';
import {addToCart, showModal, closeModal} from '../../actions';

class Home extends React.Component {
    constructor(){
        super();
        this.Service = new Service();
        this.state = {};
        this.handleSearch = this.handleSearch.bind(this);
        this.handleProductView = this.handleProductView.bind(this);
    }

    componentWillMount(){
        this.Service.getAutoParts().then((autoparts)=>{
            let ProductList = [];
            let Categories = [];
            ProductList = autoparts.data.map((autopart)=>{
                Categories.push(autopart.category);
                return {'partname': autopart.partname, 'imgurl': autopart.imgurl, 'key': autopart.key}
            });

            this.setState({
                ProductList, Categories: [...new Set(Categories)]
            });
        })
    }

    handleSearch(){
        const searchField = document.getElementById('searchField');
        this.Service.getByCategory(searchField.value).then((autoparts)=>{
            let ProductList = [];
            ProductList = autoparts.data.map((autopart)=>{
                return {'partname': autopart.partname, 'imgurl': autopart.imgurl, 'key': autopart.key}
            });

            this.setState({
                ProductList
            });
        })
    }

    handleProductView(event){
        const productName = event.target.innerHTML;
        this.Service.getByPartName(productName).then((autopart)=>{
            this.setState({
                ProductViewDetails: autopart.data[0],
            });
            this.props.showModal();
        });
    }

    render() {
        return (
            <>
                <Header categories={this.state.Categories?this.state.Categories:[]} handleSearch={this.handleSearch}/>
                <div id="homeContainer" style={{display:'none'}}>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="category-section">
                                <ProductCategory productCategoryList={this.state.Categories}/>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <ProductList productList={this.state.ProductList} handleProductView={this.handleProductView} />
                        </div>
                    </div>
                    
                </div>
                <ProductView 
                    data={this.state.ProductViewDetails} 
                    handleModalClose={this.props.closeModal} 
                    modalShow={this.props.modalShow} 
                    handleAddToCart={this.props.addToCart}
                />
            </>
        );
    }
}

const mapStateToProps = ({cart, modalShow}) => ({cart, modalShow});
export default connect(mapStateToProps, {addToCart, showModal, closeModal})(Home);

