import React, { Component } from 'react';  
import sample_image from './logo.png' 

class ProductCard extends Component {
    render(){
        return (
            <tr>
                <th scope="row"><input type="checkbox" value=""/></th>
                <td className="preview">
                    <img src={sample_image} alt="" />
                    <span>Corsair 100</span>
                </td>

                <td>120 mm</td>
                <td>Black</td>
                <td>600-1500 RPM</td>
                <td>63 CFM</td>
                <td>36 dB</td>
                <td>Yes</td>
                <td>5 <i class="fa fa-star star-activate" ></i></td>
                <td>$89.98</td>
                <td>
                    <button type="button" class="btn btn-primary btn-sm">
                        Add
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductCard;