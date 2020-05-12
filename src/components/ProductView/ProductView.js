import React from 'react';
import './ProductView.css'

const ProductView = (props) => {
    if(props.data){
        return(
            <div className={`modal ${props.modalShow?'show':''}`} id="productViewModal" tabIndex="-1" role="dialog" aria-labelledby="productViewModallLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="productViewModallLabel">Product Details</h5>
                        <button onClick={props.handleModalClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="centerContent">
                            <img src={props.data.imgurl} alt={props.data.partname} />
                            <h4>{props.data.partname}</h4>
                        </div>
                        <p>{props.data.description}</p>
                    </div>
                    <div className="modal-footer centerContent">
                        <button type="button" className="btn btn-primary">Add to Cart</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }else return null;
}

export default ProductView;