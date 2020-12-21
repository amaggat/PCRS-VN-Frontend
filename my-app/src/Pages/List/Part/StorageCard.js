import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

class StorageCard extends Component {
    render() {
        return (
            <tr>
                <td><Link className="component" id="" to="/products/storage">Storage</Link></td>
                <td>
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/storage">
                        <i className="fas fa-plus" />
                        Choose a Storage
                    </Link>
                </td>
                <td className="base"></td>
                <td className="promo"></td>
                <td className="snipping"></td>
                <td className="tax"></td>
                <td className="price"></td>
                <td className="where"></td>
            </tr>

        )
    }
}

export default StorageCard;