import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import sample_image from './Sample/storage-demo.jpeg' 

class PowerCard extends Component {
    render(){
        return (
            <tr>
                <th scope="row"><input type="checkbox" value=""/></th>
                <td className="preview card-text">
                    <Link to="products/storage/sample">
                        <img src={sample_image} alt=""/>
                        <span>Samsung 860 Evo</span>
                    </Link>
                </td>
                <td className="card-text">1 TB</td>
                <td className="card-text">SSD</td>
                <td className="card-text">1024 MD</td>
                <td className="card-text">2.5"</td>
                <td className="card-text">SATA 6 GB/s</td>
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