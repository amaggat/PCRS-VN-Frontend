import React, { Component } from 'react';  
import sample_image from './Sample/memory-demo.jpeg' 

class MemoryCard extends Component {
    render(){
        return (
            <tr>
                <th scope="row"><input type="checkbox" value=""/></th>
                <td className="preview card-text">
                    <img src={sample_image} alt="" />
                    <span>Corsair Vengeance LPX 16 GB</span>
                </td>
                <td className="card-text">DDR4-3200</td>
                <td className="card-text">2 x 8GB</td>
                <td className="card-text">-</td>
                <td className="card-text">Black / Yellow</td>
                <td className="card-text">10</td>
                <td className="card-text">16</td>
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