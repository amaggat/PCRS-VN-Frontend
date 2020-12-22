import React, { Component } from 'react';
import Footer from '../../../../../Components/Footer/Footer';
import Header from '../../../../../Components/Header/Header';
import img from './case-demo.jpeg';

import '../../ProductSample.css';

class CaseTemplate extends Component {
    render () {
        return (
            <div className="product-detail white-back">
                <Header />
                <div className="banner text-center">
                    <p className="banner-title">PRODUCT DETAIL</p>
                    <p className="banner-name">Phanteks Eclipse P300A Mesh</p>
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
                                        <p className="title">Type</p>
                                        <p className="body">ATX Mid Tower</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Color</p>
                                        <p className="body">Black</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Power Supply</p>
                                        <p className="body">None</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Side Pane Window</p>
                                        <p className="body">Tempered Glass</p>
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

export default CaseTemplate;