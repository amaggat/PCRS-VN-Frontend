import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

class CPUCard extends Component {
    render() {
        return (
            <tr>
                <td><Link className="component" id="" to="/products/cpu">CPU</Link></td>
                <td>
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/cpu">
                        <i className="fas fa-plus" />
                        Choose a CPU
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

export default CPUCard;