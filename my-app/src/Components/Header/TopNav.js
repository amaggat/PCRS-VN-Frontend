import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Sources/Icon/logo.svg';
import './Header.css';

class TopNav extends Component {
    render() {
        return (
            <div classNames="top-nav">
                
                <ul className="nav justify-content-end">
                    {/* <li className="nav-item">
                        <Link className="navbar-brand" to="/"><img className="logo round float-left" src={logo} alt="logo"/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <div className="navbar-toggler-icon"></div>
                        </button>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/help">Help</Link>
                    </li>
                </ul>
            </div>

        )
    }
}

export default TopNav;