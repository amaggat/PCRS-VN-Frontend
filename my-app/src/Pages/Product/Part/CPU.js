import React, { Component } from 'react';
import ProductFilter from './ProductFilter';
import TopFunctionProduct from './TopFunctionProduct';
import ProductCart from './ProductCard';
import PageNav from '../../../Components/Page/PageNav'; 
import '../Product.css'

class CPU extends Component {
    render() {
        return ( 
            <div className="product cpu">
                <div className="product-banner">
                    <h1 className="text-center">Choose A CPU</h1>
                </div>

                <div class="tab-pane container-xl" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row ">
                        <div class="col-2">
                            <ProductFilter/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct/>
                            <table class="table">
                                <thead>
                                    <tr class="font-weight-bold">
                                        <th scope="col" class="font-weight-bold"><input type="checkbox" value=""/></th>
                                        <th scope="col" class="font-weight-bold">Name</th>
                                        <th scope="col" class="font-weight-bold">Size</th>
                                        <th scope="col" class="font-weight-bold">Color</th>
                                        <th scope="col" class="font-weight-bold">RPM</th>
                                        <th scope="col" class="font-weight-bold">AirFlow</th>
                                        <th scope="col" class="font-weight-bold">Noise Level</th>
                                        <th scope="col" class="font-weight-bold">PWM</th>
                                        <th scope="col" class="font-weight-bold">Rating</th>
                                        <th scope="col" class="font-weight-bold">Price</th>
                                        <th scope="col" class="font-weight-bold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                    <ProductCart/>
                                </tbody>
                            </table>
                            <PageNav/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CPU;