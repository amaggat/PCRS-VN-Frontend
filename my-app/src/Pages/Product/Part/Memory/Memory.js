import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'
import MemoryCard from './MemoryCard';
class CCooler extends Component {
    render() {
        return ( 
            <div className="product white-back">
                <Header />
                <div className="product-banner">
                    <h1 className="text-center">Choose A Memory</h1>
                </div>

                <div className="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="row">
                        <div className="col-2">
                            <ProductFilter/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct/>
                            <table className="table">
                                <thead>
                                    <tr className="font-weight-bold">
                                        <th scope="col" className="font-weight-bold"><input type="checkbox" value=""/></th>
                                        <th scope="col" className="font-weight-bold" id="name" >Name</th>
                                        <th scope="col" className="font-weight-bold" id="speed">Speed</th>
                                        <th scope="col" className="font-weight-bold" id="modules">Modules</th>
                                        <th scope="col" className="font-weight-bold" id="price-per-gb" >Price / GB</th>
                                        <th scope="col" className="font-weight-bold" id="color">Color</th>
                                        <th scope="col" className="font-weight-bold" id="word-latency">First Word Latency</th>
                                        <th scope="col" className="font-weight-bold" id="cas-latency">CAS Latency</th>
                                        <th scope="col" className="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" className="font-weight-bold" id="price">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* TODO: each row is a cpu */}
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
                                    <MemoryCard/>
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

export default CCooler;