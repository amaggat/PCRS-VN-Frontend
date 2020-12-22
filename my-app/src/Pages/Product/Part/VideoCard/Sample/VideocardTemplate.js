import React, { Component } from 'react';
import Footer from '../../../../../Components/Footer/Footer';
import Header from '../../../../../Components/Header/Header';
import img from './video-card-demo.jpeg';

import '../../ProductSample.css';

class VidecardTemplate extends Component {
    render () {
        return (
            <div className="product-detail white-back">
                <Header />
                <div className="banner text-center">
                    <p className="banner-title">PRODUCT DETAIL</p>
                    <p className="banner-name">Asus TUF GAMING</p>
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
                                        <p className="body">Asus</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Serie Name</p>
                                        <p className="body">TUF GAMING</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Chipset</p>
                                        <p className="body">GeForce RTX 3080</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Memory</p>
                                        <p className="body">10 GB</p>
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

export default VidecardTemplate;