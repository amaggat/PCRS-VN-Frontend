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
                <Dropdown />
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