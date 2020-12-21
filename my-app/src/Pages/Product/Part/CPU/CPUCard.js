import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import sample_image from './Sample/cpu-demo.jpeg' 

class CPUCard extends Component {
    render(){
        return (
            <tr>
                <th scope="row"><input type="checkbox" value=""/></th>
                <td className="preview">
                    <Link to="/products/cpu/sample">
                        <img src={sample_image} alt="CPU"/>
                        <span href="/products/cpu/sample">AMD Ryzen 5</span>
                    </Link>
                </td>

                <td>6</td>
                <td>3.6 GHz</td>
                <td>4.2 GHz</td>
                <td>65 W</td>
                <td>None</td>
                <td>Yes</td>
                <td>5 <i className="fa fa-star star-activate" ></i></td>
                <td>$89.98</td>
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