import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

class CaseCard extends Component {
    render() {
        return (
            <tr>
                <td className="row-title"><Link className="component" id="" to="/products/case">Case</Link></td>
                <td>
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/case">
                        <i className="fas fa-plus" />
                        Choose a Case
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

export default CaseCard;