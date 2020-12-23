import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

class ProductCard extends Component {
    render() {
        return (
            <tr>
                <td className="row-title"><Link className="component" to="#">CPU</Link></td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm">
                        <i className="fas fa-plus" />
                        Choose a CPU
                    </button>
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

export default ProductCard;