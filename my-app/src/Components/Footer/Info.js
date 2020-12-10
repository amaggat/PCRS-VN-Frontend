import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Info extends Component {
    render() {
        return (
            <div className="col">
                <div className="card white">
                    <div className="card-body">
                        <p className="card-text">
                            <ul className="card-title white">
                                <li>
                                    <h5 className="footer-title">PROJECT TEAM</h5> 
                                </li>
                                <li>
                                    <Link to="">About us</Link>
                                </li>
                                <li>
                                    <Link to="">Contact</Link>
                                </li>
                                <li>
                                    <Link to="">Persional Informaition</Link>
                                </li>
                                <li>
                                    <Link to="">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link to="">Privacy Policy</Link>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;