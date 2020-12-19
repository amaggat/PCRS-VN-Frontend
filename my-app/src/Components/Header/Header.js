import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopNav from './TopNav';
import SubNav from './SubNav';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            dropdown: false,
        }
    }

    handleDropdown = (event) => {
        let {dropdown} = this.state;
        if(event === 'focus') {
            dropdown = true;
        }
        if(event === 'blur') {
            dropdown = false; //fucking shit
        }
        this.setState({
            dropdown,
        })
    }
    render() {
        const {dropdown} = this.state;
        const dropdownElement = (
        <div>

            <div className={`system-builder-dropdown ${dropdown ? "" : "hide"}`}>   
                <div className="row">
                    <div className="col-6">
                        
                        <div className="row">

                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" src="https://via.placeholder.com/100"></img>
                                    <span className="product-category__item-title">Case</span>
                                </Link>
                            </div>
                            <div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" src="https://via.placeholder.com/100"></img>
                                    <span className="product-category__item-title">CPU</span>
                                </Link>
                            </div><div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" src="https://via.placeholder.com/100"></img>
                                    <span className="product-category__item-title">CPU Cooler</span>
                                </Link>
                            </div><div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" src="https://via.placeholder.com/100"></img>
                                    <span className="product-category__item-title">Memory</span>
                                </Link>
                            </div><div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" src="https://via.placeholder.com/100"></img>
                                    <span className="product-category__item-title">Mother Board</span>
                                </Link>
                            </div><div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" src="https://via.placeholder.com/100"></img>
                                    <span className="product-category__item-title">Power Supply</span>
                                </Link>
                            </div><div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" src="https://via.placeholder.com/100"></img>
                                    <span className="product-category__item-title">SSD</span>
                                </Link>
                            </div><div className="col-3 prodcut-catrgory">
                                <Link className="product-category__item" to="/products/cpu">
                                    <img className="product-category__item-img" src="https://via.placeholder.com/100"></img>
                                    <span className="product-category__item-title">Video Card</span>
                                </Link>
                            </div>
                            {/* <Link className="col-3 product-category__item" to="/products">Mother board</Link>
                            <Link className="col-3 product-category__item" to="/products">Memory</Link>
                            <Link className="col-3 product-category__item" to="#">Storge</Link>
                            <Link className="col-3 product-category__item" to="#">Video Card</Link>
                            <Link className="col-3 product-category__item" to="#">Power Supply</Link>
                            <Link className="col-3 product-category__item" to="#">Case</Link> */}
                        </div>
                    </div>
                    <div className="col-6">
                        right
                    </div>
                </div> 
            </div>
        </div>
        );

        return (
            <div className="header">
                <TopNav />

                <nav className="navbar navbar-expand-lg sticky-top container-fluid">
                    <SubNav handleDropdown={this.handleDropdown} />
                    <div className="btn-search">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>    
                    </div>
                </nav>
                {/* {dropdown ? dropdownElement : null} */}
                {dropdownElement}
            </div>
        );
    }
}

export default Header;