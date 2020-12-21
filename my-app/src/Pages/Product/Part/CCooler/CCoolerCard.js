import React, { Component } from 'react';  
import sample_image from './Sample/cpu-cooler-demo.jpeg' 

class CCoolerCard extends Component {
    render(){
        return (
            <tr>
                <th scope="row"><input type="checkbox" value=""/></th>
                <td className="preview card-text">
                    <img src={sample_image} alt="" />
                    <span>Cooler Master Hyper 212 EVO</span>
                </td>
                <td className="card-text">600 - 2000 RPM</td>
                <td className="card-text">9 - 36 dB</td>
                <td className="card-text">Black/Silver</td>
                <td className="card-text">240 mm</td>
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

export default CCoolerCard;