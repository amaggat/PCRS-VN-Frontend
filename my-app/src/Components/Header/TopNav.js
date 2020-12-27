import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Sources/Icon/logo_final2.png';
import './Header.css';

class TopNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <div className="nav-container">
                    <div className="row">
                        <div className="col-sm-2 nav-link">
                            <Link to="/">
                                <img className="nav-logo" src={logo} alt="Logo"/>
                            </Link>
                        </div>
                        <div className="col-sm-8">

                        </div>
                        <div className="col-sm-2">
                            <nav className="nav text-center">
                                <li className="nav-item">
                                    <a target="_blank" rel="noreferrer" className="nav-link" href="https://github.com/manhdung20112000/app-front-end">Github</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Help</Link>
                                </li>
                            </nav>
                        </div>
                    </div>    
                </div>
            </div>

        )
    }
}

export default TopNav;