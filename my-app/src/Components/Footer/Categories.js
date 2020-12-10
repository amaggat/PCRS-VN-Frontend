import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Categories extends Component {
    render() {
        return (
            <div className="col">
                <div className="card white">
                    <div className="card-body">
                        <p className="card-text">
                            <ul className="footer-list">
                                <li>
                                    <h5 className="footer-title">CATEGORIES</h5> 
                                </li>
                                <li>
                                    <Link to="">System Builds</Link>
                                </li>
                                <li>
                                    <Link to="">Complete Builds</Link>
                                </li>
                                <li>
                                    <Link to="">Browse Products</Link>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;