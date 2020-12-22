import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import CPUCard from './CPUCard';
import '../../Product.css'
import { Route, Switch } from 'react-router-dom';
import CPUTemplate from './Sample/CPUTemplate';

class CPU extends Component {
    render() {
        return ( 
            <div className="product white-back">
                <Header />
                <div className="product-banner">
                    <h1 className="text-center">Choose A CPU</h1>
                </div>

                <div className="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="row ">
                        <div className="col-2">
                            <ProductFilter/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct/>
                            <table className="table">
                                <thead className="product-card-head">
                                    <tr className="product-title">
                                        <th></th>
                                        {/* <th scope="col" className="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" className="font-weight-bold" id="name">Name</th>
                                        <th scope="col" className="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" className="font-weight-bold" id="core">Core</th>
                                        <th scope="col" className="font-weight-bold" id="thread">Thread</th>
                                        <th scope="col" className="font-weight-bold" id="socket">Socket</th>
                                        <th scope="col" className="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" className="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* TODO: each row is a cpu */}
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                    <CPUCard/>
                                </tbody>
                            </table>
                            <PageNav/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CPU;