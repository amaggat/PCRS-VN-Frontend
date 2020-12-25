import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Info extends Component {
    render() {
        return (
            <div className="col">
                <div className="card white-text">
                    <div className="card-body">
                        <div className="card-text">
                            <ul className="card-title white-text">
                                <li>
                                    <h5 className="footer-title">PROJECT TEAM</h5> 
                                </li>
                                <li>
                                    <Link className="link" to="/about">About us</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/about">Contact</Link>
                                </li>
                                <li>
                                    <Link className="link" to="">Persional Informaition</Link>
                                </li>
                                <li>
                                    <Link className="link" to="">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link className="link" to="">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;