import React, { useState  } from 'react';
import { useHistory } from 'react-router-dom'
import '../Product.css'

function CaseFilter () {
    return (
        <div className="filter">
            <h5 className="filter-title p-2">Filter</h5>
            <form className="filter-content" id="filterForm">
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
                        <input type="radio" name="manufacturer" className="form-check-input" id="man-all"/>
                        <label className="form-check-label" for="man-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" className="form-check-input" id="man-ryzen"/>
                        <label className="form-check-label" for="man-ryzen">Ryzen</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" name="manufacturer" className="form-check-input" id="man-intel"/>
                        <label className="form-check-label" for="man-intel">Intel</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Chipset</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="chipset-all"/>
                        <label className="form-check-label" for="chipset-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="chipset-ryzen"/>
                        <label className="form-check-label" for="chipset-ryzen">Ryzen</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="chipset-i3"/>
                        <label className="form-check-label" for="chipset-i3">Core i3</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="chipset-i5"/>
                        <label className="form-check-label" for="chipset-i5">Core i5</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="chipset-i7"/>
                        <label className="form-check-label" for="chipset-i7">Core i7</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="chipset-i9"/>
                        <label className="form-check-label" for="chipset-i9">Core i9</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Core</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="core-all"/>
                        <label className="form-check-label" for="core-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="core-4"/>
                        <label className="form-check-label" for="core-4">4</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="core-6"/>
                        <label className="form-check-label" for="core-6">6</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="core-12"/>
                        <label className="form-check-label" for="core-12">12</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="core-16"/>
                        <label className="form-check-label" for="core-16">16</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    {/* CPUService.getCPUbySocket(socket) */}
                    <label>Socket</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="socker-all"/>
                        <label className="form-check-label" for="socker-all">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="socker-am4"/>
                        <label className="form-check-label" for="socker-am4">Socket AM4</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="socker-lga1200"/>
                        <label className="form-check-label" for="socker-lga1200">LGA1200</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="socker-lga1151"/>
                        <label className="form-check-label" for="socker-lga1151">LGA1151</label>
                    </div>
                </div>
                <div className="form-group border-top pt-2">
                    <label>Rating</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">All</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="exampleCheck1"/>
                        <i className="fas fa-star star-activate"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CaseFilter;