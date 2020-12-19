import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReturnHeader extends Component {
    render() {
        return (
            <div className="nav return-header">
                <Link className="arrow fas fa-arrow-left" to="/"></Link>
            </div>
        )
    }
}

export default ReturnHeader;