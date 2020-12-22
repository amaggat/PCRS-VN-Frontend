import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import sample_image from './Sample/motherboard-demo.jpeg' 

class MotherboardCard extends Component {
    render(){
        return (
            <tr className="product-card">
                <td scope="row"><input type="checkbox" value=""/></td>
                <td className="preview card-text">
                    <Link to="/products/motherboard/sample">
                        <img src={sample_image} alt="" />
                        <span>Asus ROG STRIX B450-F GAMING</span>
                    </Link>
                </td>
                <td className="card-text">AM4</td>
                <td className="card-text">AMD B450</td>
                <td className="card-text">64 GB</td>
                <td className="card-text">4</td>
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

export default MotherboardCard;