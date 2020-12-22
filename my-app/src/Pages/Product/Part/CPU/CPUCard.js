import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import sample_image from './Sample/cpu-demo.jpeg' 

class CPUCard extends Component {
    render(){
        return (
            <tr className="product-card">
                <td scope="row"><input type="checkbox" value=""/></td>
                <td className="preview card-text">
                    <Link to="/products/cpu/sample">
                        <img src={sample_image} alt="CPU"/>
                        <span href="/products/cpu/sample">AMD Ryzen 5</span>
                    </Link>
                </td>

                <td className="card-text">-</td>
                <td className="card-text">6</td>
                <td className="card-text">12</td>
                <td className="card-text">Socket AM4</td>
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

export default CPUCard;