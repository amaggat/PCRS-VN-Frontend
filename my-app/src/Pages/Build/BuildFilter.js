import React, { Component } from 'react';

class BuildFilter extends Component {
    render(){
        return(
            <div className="filter">
                <h5 className="border-bottom p-2 font-weight-bold">Filter</h5>
                <form>
                    <div className="form-group">
                        <label>Price</label>
                        <div className="input-group">
                            <input type="text" className="form-control  form-control-sm"
                                placeholder="min"/>
                            <input type="text" className="form-control  form-control-sm"
                                placeholder="max"/>
                        </div>
                    </div>
                    <div className="form-group border-top pt-2">
                        <label>Published</label>
                        <select className="form-control form-control-sm">
                            <option selected>Choose...</option>
                            <option value="1">Past day</option>
                            <option value="2">Past week</option>
                            <option value="3">Past month</option>
                        </select>
                    </div>

                    <div className="form-group border-top pt-2">
                        <label>Featured Build</label>
                        <div className="custom-control"> 
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">All</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">Yes</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">No</label>
                            </div>
                        </div>                                    
                    </div>

                    <div className="form-group border-top pt-2">
                        <label>CPU</label>
                        <div className="custom-control"> 
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">All</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">AMD Ryzen 5 2600</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">AMD Ryzen 5 3600</label>
                            </div>
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">AMD Ryzen 5 3600X</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">AMD Ryzen 5 3700X</label>
                            </div>
                        </div>                                    
                    </div>

                    <div className="form-group border-top pt-2">
                        <label>CPU Overclocked</label>
                        <div className="custom-control"> 
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">All</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">Yes</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">No</label>
                            </div>
                        </div>                                    
                    </div>

                    <div className="form-group border-top pt-2">
                        <label>CPU Socket</label>
                        <div className="custom-control"> 
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">All</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">AM4</label>
                            </div>                                    
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">LGA1150</label>
                            </div>
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">LGA1151</label>
                            </div>
                            <div classNameName="form-check">
                                <input type="checkbox" className="form-check-input" id="featured-build"/>
                                <label className="form-check-label" for="featured-build">LGA1155</label>
                            </div>
                        </div>                                    
                    </div>
                </form>
            </div>
        )
    }
}

export default BuildFilter;