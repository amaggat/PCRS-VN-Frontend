import React, { Component } from 'react';
import Footer from '../../../../../Components/Footer/Footer';
import Header from '../../../../../Components/Header/Header';
import img from './cpu-cooler-demo.jpeg';

import '../../ProductSample.css';

class CCoolerTemplate extends Component {
    render () {
        return (
            <div className="product-detail white-back">
                <Header />
                <div className="banner text-center">
                    <p className="banner-title">PRODUCT DETAIL</p>
                    <p className="banner-name">Cooler Master Hyper 212 EVO</p>
                </div>

                <div className="w-container">
                    <div className="row">
                        <div className="col-lg-4 left">
                            <div className="block img">
                                <img src={img} alt="CPU-sample" className="detail-img"/>
                            </div>
                            <div className="block action form-group row justify-content-md-center">
                                <div className="col-sm-2 action-function">
                                    <label for="quantity" className="form-title text-center">QTY</label>
                                </div>
                                <div className="col-sm-2 action-function ">
                                    <select class="form-control" id="quantity">
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div className="col-sm-2 action-function">
                                    <button type="button" className="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 right">
                            <div className="block detail-text">
                                <div className="detail-title">Price</div>
                                <p className="detail-price">500$</p>
                            </div>

                            <div className="block detail-text">
                                <ul>
                                    <div className="detail-title ">Specifications</div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="manufaturer">
                                        <p className="title">Manufaturer</p>
                                        <p className="body">Mot cai hang nao do</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Fan RPM</p>
                                        <p className="body">600 - 2000 RPM</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Noise Level</p>
                                        <p className="body">9 - 36 dB</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Color</p>
                                        <p className="body">Black / Silver</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Raditor Size</p>
                                        <p className="body">240 mm</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CCoolerTemplate;