import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import CPUCard from './CPUCard';
import '../../Product.css'

class CPU extends Component {
    render() {
        return ( 
            <div className="product cpu white-back">
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
                                <thead>
                                    <tr className="font-weight-bold">
                                        <th scope="col" className="font-weight-bold"><input type="checkbox" value=""/></th>
                                        <th scope="col" className="font-weight-bold" id="name">Name</th>
                                        <th scope="col" className="font-weight-bold" id="core-clock">Core Clock</th>
                                        <th scope="col" className="font-weight-bold" id="boost-clock">Boost Clock</th>
                                        <th scope="col" className="font-weight-bold" id="tdp">TDP</th>
                                        <th scope="col" className="font-weight-bold" id="integrated-graphics">Integrated Graphics</th>
                                        <th scope="col" className="font-weight-bold" id="smt">SMT</th>
                                        <th scope="col" className="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" className="font-weight-bold" id="price">Price</th>
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