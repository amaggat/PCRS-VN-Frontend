import React, { Component } from 'react';
import ProductFilter from './ProductFilter';
import TopFunctionProduct from './TopFunctionProduct';
import ProductCard from './ProductCard';
import PageNav from '../../../Components/Page/PageNav'; 
import '../Product.css'
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';

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
                                        <th scope="col" className="font-weight-bold">Name</th>
                                        <th scope="col" className="font-weight-bold">Size</th>
                                        <th scope="col" className="font-weight-bold">Color</th>
                                        <th scope="col" className="font-weight-bold">RPM</th>
                                        <th scope="col" className="font-weight-bold">AirFlow</th>
                                        <th scope="col" className="font-weight-bold">Noise Level</th>
                                        <th scope="col" className="font-weight-bold">PWM</th>
                                        <th scope="col" className="font-weight-bold">Rating</th>
                                        <th scope="col" className="font-weight-bold">Price</th>
                                        <th scope="col" className="font-weight-bold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* TODO: each row is a cpu */}
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
                                    <ProductCard/>
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