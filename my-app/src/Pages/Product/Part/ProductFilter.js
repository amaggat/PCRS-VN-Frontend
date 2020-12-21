import React, { Component } from 'react';
import '../Product.css'

class ProductFilter extends Component {
    render(){
        return (
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
                        <label>Manufacture</label>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">All</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Corsair</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Noctua</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">NZXT</label>
                        </div>
                    </div>
                    <div className="form-group border-top pt-2">
                        <label>Rating</label>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">All</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <i className="fas fa-star star-activate"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>

                    <div className="form-group border-top pt-2">
                        <label>Size</label>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">All</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">100 mm</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">200 mm</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">300 mm</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProductFilter;