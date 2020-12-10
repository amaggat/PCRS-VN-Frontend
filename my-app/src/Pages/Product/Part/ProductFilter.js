import React, { Component } from 'react';
import '../Product.css'

class ProductFilter extends Component {
    render(){
        return (
            <div class="filter">
                <h5 class="border-bottom p-2 font-weight-bold">Filter</h5>
                <form>
                    <div class="form-group">
                        <label>Price</label>
                        <div class="input-group">
                            <input type="text" class="form-control  form-control-sm"
                                placeholder="min"/>
                            <input type="text" class="form-control  form-control-sm"
                                placeholder="max"/>
                        </div>
                    </div>
                    <div class="form-group border-top pt-2">
                        <label>Manufacture</label>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">All</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Corsair</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Noctua</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">NZXT</label>
                        </div>
                    </div>
                    <div class="form-group border-top pt-2">
                        <label>Rating</label>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">All</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <i class="fas fa-star star-activate"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>

                    <div class="form-group border-top pt-2">
                        <label>Size</label>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">All</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">100 mm</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">200 mm</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">300 mm</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProductFilter;