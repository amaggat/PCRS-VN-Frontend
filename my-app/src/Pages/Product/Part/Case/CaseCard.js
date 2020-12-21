import React, { Component } from 'react';  
import sample_image from './Sample/case-demo.jpeg' 

class CaseCard extends Component {
    render(){
        return (
            <tr>
                <th scope="row"><input type="checkbox" value=""/></th>
                <td className="preview card-text">
                    <img src={sample_image} alt="" />
                    <span>Phanteks Eclipse P300A Mesh</span>
                </td>
                <td className="card-text">ATX Mid Tower</td>
                <td className="card-text">Black</td>
                <td className="card-text">None</td>
                <td className="card-text">Tempered Glass</td>
                <td className="card-text">0</td>
                <td className="card-text">2</td>
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

export default CaseCard;