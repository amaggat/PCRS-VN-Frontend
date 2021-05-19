import { React, Component } from 'react';
import Cookies from 'js-cookie';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../Sources/Icon/logo_final2.png';
import './Header.css';

const TopNav = () => {
    const history = useHistory();

    const handleLogout = () => {
        Cookies.remove('username');
        Cookies.remove('jwt');
        Cookies.remove('userId');
        toast('Logged out!', {
            autoClose: 1000
        });
        window.location.reload()
    }

    const handleDirectToDashboard = () => {
        history.push('/dashboard');
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
                                        ? <Link className="nav-link" onClick={() => handleDirectToDashboard()}>{Cookies.get('username')}</Link>
                                        : <Link className="nav-link" to="/login">Login</Link>
                                }
                            </li>
                            {
                                Cookies.get('jwt') !== '' && Cookies.get('jwt') != null
                                ? <Link className="nav-link" onClick={() => handleLogout()}>Logout</Link>
                                : <></>
                            }
                            <li className="nav-item">
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;