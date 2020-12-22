import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'
import CaseCard from './CaseCard';
class CCooler extends Component {
    render() {
        return ( 
            <div className="product white-back">
                <Header />
                <div className="product-banner">
                    <h1 className="text-center">Choose A Case</h1>
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
                                    <tr className="product-title">
                                        <th></th>
                                        {/* <th scope="col" className="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" className="font-weight-bold" id="name" >Name</th>
                                        <th scope="col" className="font-weight-bold" id="type">Type</th>
                                        <th scope="col" className="font-weight-bold" id="color">Color</th>
                                        <th scope="col" className="font-weight-bold" id="power">Power Supply</th>
                                        <th scope="col" className="font-weight-bold" id="window">Side Pane Window</th>
                                        <th scope="col" className="font-weight-bold" id="external-bays">External 5.25" Bays</th>
                                        <th scope="col" className="font-weight-bold" id="internal-bays">Internal 5.25" Bays</th>
                                        <th scope="col" className="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" className="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* TODO: each row is a cpu */}
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
                                    <CaseCard/>
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