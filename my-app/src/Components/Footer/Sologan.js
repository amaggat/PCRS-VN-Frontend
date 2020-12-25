import React, { Component } from 'react';
import './Footer.css';
import logo from '../Sources/Icon/logo_final.png';
import { Link } from 'react-router-dom';

class Sologan extends Component {
    render() {
        return (
            <div className="col">
                <div className="card white-text">
                    <div className="card-body">
                        <Link className="link" to="/">
                            <img src={logo} className="logo" alt="PC-Builder" />
                            <h4 className="card-title">PICK PARTS.</h4>
                            <h4 className="card-title">BUILD YOUR PC.</h4>
                            <h4 className="card-title">COMPARE AND SHARE.</h4>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sologan;