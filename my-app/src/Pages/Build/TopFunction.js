import React, { Component } from 'react'; 

class TopFunction extends Component {
    render() {
        return (
            <div className="form-row border-bottom align-items-center">
                <div className="col align-items-center">
                    <div className="form-check">
                        <h5 className="form-check-label font-weight-bold">
                            Completed builds
                        </h5>
                    </div>
                </div>
                <div className="col d-inline-flex align-items-center">
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Sort by</label>
                    <select className="w-75 custom-select my-1 mr-sm-2  form-control-sm"
                            id="inlineFormCustomSelectPref">
                        <option selected>Date Posted (Newest)</option>
                        <option value="1">Date Posted (Oldest)</option>
                        <option value="2">Highest Rate</option>
                        <option value="3">Highest Price</option>
                    </select>
                </div>
                <div className="col align-items-center">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-search"></i>
                        </div>
                    </div>
                    <input type="text" className="form-control  form-control-sm"
                        id="inlineFormInputGroup"
                        placeholder="Builds"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopFunction;