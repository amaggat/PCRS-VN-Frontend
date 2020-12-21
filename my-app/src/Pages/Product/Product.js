import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from "../../Components/Header/Header";
import Footer from '../../Components/Footer/Footer';
import './Product.css'

class Product extends Component {
    render (){
        return(
            <div className="products-menu white-back">
                <Header />
                <div className="banner">
                    <h1 className="text-center">Products Categories</h1>
                </div>
                <div className="w-container">
                    <div>
                        <h4 className="title">Core</h4>
                        <ul className="block">
                            <li><Link to="/products/cpu">CPU</Link></li>
                            <li><Link to="/products/cpu-cooler">CPU Cooler</Link></li>
                            <li><Link to="/products/mother-board">Motherboards</Link></li>
                            <li><Link to="/products/memory">Memory</Link></li>
                            <li><Link to="/products/storage">Storage</Link></li>
                            <li><Link to="/products/video-card">Video Cards</Link></li>
                            <li><Link to="/products/case">Cases</Link></li>
                            <li><Link to="/products/power">Power Supplies</Link></li>
                            <li><Link to="#">Optical Drives</Link></li>
                            <li><Link to="#">Operating Systems</Link></li>
                            <li><Link to="#">Software</Link></li>
                            <li><Link to="#">Monitors</Link></li>
                            <li><Link to="#">External Storage</Link></li>
                            <li><Link to="#">Laptops</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="title">Accessories / Other</h4>
                        <ul className="block">
                            <li><Link to="#">Case Accessories</Link></li>
                            <li><Link to="#">Case Fans</Link></li>
                            <li><Link to="#">Fan Controllers</Link></li>
                            <li><Link to="#">Thermal Compound</Link></li>
                            <li><Link to="#">UPS Systems</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="title">Expansion Cards / Networking</h4>
                        <ul className="block">
                            <li><Link to="#">Sound Cards</Link></li>
                            <li><Link to="#">Wired Network Adapters</Link></li>
                            <li><Link to="#">Wireless Network Adapters</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="title">Peripherals</h4>
                        <ul className="block">
                            <li><Link to="#">Headphones</Link></li>
                            <li><Link to="#">Keyboards</Link></li>
                            <li><Link to="#">Mice</Link></li>
                            <li><Link to="#">Speakers</Link></li>
                            <li><Link to="#">Webcams</Link></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Product;