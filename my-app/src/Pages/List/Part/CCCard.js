import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

class CCCCard extends Component {
    render() {
        return (
            <tr>
                <td className="row-title"><Link className="component" id="" to="/products/cpu-cooler">CPU Cooler</Link></td>
                <td>
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/cpu-cooler">
                        <i className="fas fa-plus" />
                        Choose a CPU Cooler
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

export default CCCCard;