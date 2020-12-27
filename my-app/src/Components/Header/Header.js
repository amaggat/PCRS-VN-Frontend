import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TopNav from './TopNav';
import SubNav from './SubNav';
import Dropdown from './Dropdown';
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
            dropdown = false;
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
                <Dropdown />
            </div>
        </div>
        );

        return (
            <div className="header">
                <TopNav />
                <div className="sub-nav">
                    <nav className="nav-container navbar navbar-expand-lg sticky-top container-fluid">
                        <SubNav handleDropdown={this.handleDropdown} />
                    </nav>
                    {dropdownElement}
                </div>
            </div>
        );
    }
}

export default Header;