import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Product.css'

class Product extends Component {
    render (){
        return(
            <div className="products-menu">
                <div className="banner">
                    <h1 className="text-center">Products Categories</h1>
                </div>
                <div className=" container-md">
                    <div>
                        <h4 className="title border-bottom">Core</h4>
                        <ul className="container-sm">
                            <li><Link tp="#">CPU</Link></li>
                            <li><Link tp="#">CPU Cooler</Link></li>
                            <li><Link tp="#">Motherboards</Link></li>
                            <li><Link tp="#">Memory</Link></li>
                            <li><Link tp="#">Storage</Link></li>
                            <li><Link tp="#">Video Cards</Link></li>
                            <li><Link tp="#">Cases</Link></li>
                            <li><Link tp="#">Power Supplies</Link></li>
                            <li><Link tp="#">Optical Drives</Link></li>
                            <li><Link tp="#">Operating Systems</Link></li>
                            <li><Link tp="#">Software</Link></li>
                            <li><Link tp="#">Monitors</Link></li>
                            <li><Link tp="#">External Storage</Link></li>
                            <li><Link tp="#">Laptops</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="title border-bottom">Accessories/Other</h4>
                        <ul className="container-sm">
                            <li><Link tp="#">Case Accessories</Link></li>
                            <li><Link tp="#">Case Fans</Link></li>
                            <li><Link tp="#">Fan Controllers</Link></li>
                            <li><Link tp="#">Thermal Compound</Link></li>
                            <li><Link tp="#">UPS Systems</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="title border-bottom">Expansion Cards/Networking</h4>
                        <ul className="container-sm">
                            <li><Link tp="#">Sound Cards</Link></li>
                            <li><Link tp="#">Wired Network Adapters</Link></li>
                            <li><Link tp="#">Wireless Network Adapters</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="title border-bottom">Peripherals</h4>
                        <ul className="container-sm">
                            <li><Link tp="#">Headphones</Link></li>
                            <li><Link tp="#">Keyboards</Link></li>
                            <li><Link tp="#">Mice</Link></li>
                            <li><Link tp="#">Speakers</Link></li>
                            <li><Link tp="#">Webcams</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;