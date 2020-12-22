import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import sample_image from './Sample/power-demo.jpeg' 

class PowerCard extends Component {
    render(){
        return (
            <tr className="product-card">
                <td scope="row"><input type="checkbox" value=""/></td>
                <td className="preview card-text">
                    <Link to="/products/power/sample">
                        <img src={sample_image} alt=""/>
                        <span>Corsair RM (2019)</span>
                    </Link>
                </td>
                <td className="card-text">ATX</td>
                <td className="card-text">750 W</td>
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

export default PowerCard;