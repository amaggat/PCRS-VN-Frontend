import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import sample_image from './Sample/memory-demo.jpeg' 

class MemoryCard extends Component {
    render(){
        return (
            <tr className="product-card">
                <td scope="row"><input type="checkbox" value=""/></td>
                <td className="preview card-text">
                    <Link to="/products/memory/sample">
                        <img src={sample_image} alt="" />
                        <span>Corsair Vengeance LPX 16 GB</span>
                    </Link>
                </td>
                <td className="card-text">DDR4-3200</td>
                <td className="card-text">-</td>
                <td className="card-text">2 x 8GB</td>
                <td className="card-text">5 <i className="fa fa-star star-activate" ></i></td>
                <td className="card-text">$89.98</td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm">
                        Add
                    </button>
                </td>
            </tr>
        )
    }
}

export default MemoryCard;