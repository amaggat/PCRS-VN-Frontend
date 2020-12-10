import React, { Component } from 'react'; 
import '../Product.css'

class TopFunctionProduct extends Component {
    render(){
        return(
            <div class="form-row border-bottom align-items-center">
                <div className="col-5">
                    <div class="col align-items-center">
                        <div class="form-check">
                            <h5 class="form-check-label font-weight-bold">
                                1256 Compatible Products
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-4"></div>
                <div class="col align-items-center">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-search"></i></div>
                        </div>
                        <input type="text" class="form-control  form-control-sm"
                                id="inlineFormInputGroup"
                                placeholder="Keyword..."/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopFunctionProduct;