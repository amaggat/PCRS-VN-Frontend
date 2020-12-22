import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import StorageCard from './StorageCard';
import '../../Product.css'
class Storage extends Component {
    render() {
        return ( 
            <div className="product white-back">
                <Header />
                <div className="product-banner">
                    <h1 className="text-center">Choose A Storage</h1>
                </div>

                <div class="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row ">
                        <div class="col-2">
                            <ProductFilter/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct/>
                            <table class="table">
                                <thead>
                                    <tr class="product-title">
                                        <th></th>
                                        {/* <th scope="col" class="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" class="font-weight-bold" id="name">Name</th>
                                        <th scope="col" class="font-weight-bold" id="capacity">Capacity</th>
                                        <th scope="col" class="font-weight-bold" id="type">Type</th>
                                        <th scope="col" class="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" class="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" class="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* TODO: each row is a cpu */}
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
                                    <StorageCard/>
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

export default Storage;