import { React, Component } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../Sources/Icon/logo_final2.png';
import './Header.css';

const TopNav = () => {

    const handleLogout = () => {
        Cookies.remove('username');
        Cookies.remove('jwt');
        Cookies.remove('userId');
        toast('Logged out!', {
            autoClose: 1000
        });
    }
    return (
        <div className="top-nav">
            <div className="nav-container">
                <div className="row">
                    <div className="col-sm-2 nav-link">
                        <Link to="/">
                            <img className="nav-logo" src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="col-sm-8">

                    </div>
                    <div className="col-sm-2">
                        <nav className="nav text-center">
                            <li className="nav-item">
                                {
                                    Cookies.get('jwt') !== '' && Cookies.get('jwt') != null
                                        ? <Link className="nav-link" onClick={() => handleLogout()}>{Cookies.get('username')}</Link>
                                        : <Link className="nav-link" to="/login">Login</Link>
                                }
                            </li>
                            <li className="nav-item">
                                <a target="_blank" rel="noreferrer" className="nav-link" href="https://github.com/amaggat/PCRS-VN-Frontend">Github</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;