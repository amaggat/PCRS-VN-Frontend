import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

class GPUCard extends Component {
    render() {
        return (
            <tr>
                <td className="row-title"><Link className="component" id="" to="/products/video-card">Video Card</Link></td>
                <td>
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/video-card">
                        <i className="fas fa-plus" />
                        Choose a Video Card
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

export default GPUCard;