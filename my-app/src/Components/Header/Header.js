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

    handleDropdown = () => {
        const {dropdown} = this.state;
        this.setState({
            dropdown: !dropdown,
        })
    }
    render() {
        const {dropdown} = this.state;
        const dropdownElement = (<div className={`system-builder-dropdown ${dropdown ? "" : "hide"}`}>
        <Link className="dropdown-item" to="/products/cpu">CPU</Link>
        <Link className="dropdown-item" to="/products">Mother board</Link>
        <Link className="dropdown-item" to="/products">Memory</Link>
        <Link className="dropdown-item" to="#">Storge</Link>
        <Link className="dropdown-item" to="#">Video Card</Link>
        <Link className="dropdown-item" to="#">Power Supply</Link>
        <Link className="dropdown-item" to="#">Case</Link>
    </div>);

        return (
            <div className="header">
                <TopNav />

                <nav className="navbar navbar-expand-lg sticky-top">
                    <div className="container-fluid">
                        <SubNav handleDropdown={this.handleDropdown} />
                        <div className="btn-search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                            </form>    
                        </div>
                    </div>
                </nav>
                {/* {dropdown ? dropdownElement : null} */}
                {dropdownElement}
            </div>
        );
    }
}

export default Header;