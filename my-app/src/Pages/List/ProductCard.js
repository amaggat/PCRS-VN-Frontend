import React, { Component } from 'react';
import './List.css'

class ProductCard extends Component {
    render() {
        return (
            <tr>
                <td><a href="#">CPU</a></td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm">
                        <i className="fas fa-plus" />
                        Choose a CPU
                    </button>
                </td>
                <td>Example</td>
                <td>Example</td>
                <td>Example</td>
                <td>Example</td>
                <td>Example</td>
                <td>Example</td>
            </tr>

        )
    }
}

export default ProductCard;