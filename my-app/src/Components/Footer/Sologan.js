import React, { Component } from 'react';
import './Footer.css';
import logo from '../Sources/Icon/logo.svg';

class Sologan extends Component {
    render() {
        return (
            <div className="col">
                <div className="card white">
                    <div className="card-body">
                        <img src={logo} class="logo" alt="PC-Builder" />
                        <h4 className="card-title">PICK PARTS.</h4>
                        <h4 className="card-title">BUILD YOUR PC.</h4>
                        <h4 className="card-title">COMPARE AND SHARE.</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sologan;