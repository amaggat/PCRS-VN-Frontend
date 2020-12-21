import React, { Component } from 'react';  
import sample_image from './Sample/motherboard-demo.jpeg' 

class MotherboardCard extends Component {
    render(){
        return (
            <tr>
                <th scope="row"><input type="checkbox" value=""/></th>
                <td className="preview card-text">
                    <img src={sample_image} alt="" />
                    <span>Asus ROG STRIX B450-F GAMING</span>
                </td>
                <td className="card-text">AM4</td>
                <td className="card-text">ATX</td>
                <td className="card-text">64 GB</td>
                <td className="card-text">4</td>
                <td className="card-text">Black</td>
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