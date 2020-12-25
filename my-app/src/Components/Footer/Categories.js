import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Categories extends Component {
    render() {
        return (
            <div className="col">
                <div className="card white">
                    <div className="card-body">
                        <div className="card-text">
                            <ul className="footer-list">
                                <li>
                                    <h5 className="footer-title">CATEGORIES</h5> 
                                </li>
                                <li>
                                    <Link className="link" to="/list">System Builds</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/builds">Complete Builds</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/products">Browse Products</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;