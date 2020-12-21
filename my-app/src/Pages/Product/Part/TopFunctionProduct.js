import React, { Component } from 'react'; 
import '../Product.css'

class TopFunctionProduct extends Component {
    render(){
        return(
            <div className="form-row border-bottom align-items-center">
                <div className="col-5">
                    <div className="col align-items-center">
                        <div className="form-check">
                            <h5 className="form-check-label font-weight-bold">
                                1256 Compatible Products
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4"></div>
                <div className="col align-items-center">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-search"></i></div>
                        </div>
                        <input type="text" className="form-control  form-control-sm"
                                id="inlineFormInputGroup"
                                placeholder="Keyword..."/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopFunctionProduct;