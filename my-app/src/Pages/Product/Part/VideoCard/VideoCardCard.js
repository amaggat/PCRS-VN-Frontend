import React, { Component } from 'react';  
import { Link } from 'react-router-dom';
import sample_image from './Sample/video-card-demo.jpeg' 

class VideoCardCard extends Component {
    // funny name I know :)))
    render(){
        return (
            <tr>
                <th scope="row"><input type="checkbox" value=""/></th>
                <td className="preview card-text">
                    <Link to="products/video-card/sample">
                        <img src={sample_image} alt=""/>
                        <span>Asus TUF GAMING</span>
                    </Link>
                </td>
                <td className="card-text">GeForce RTX 3080</td>
                <td className="card-text">10 GB</td>
                <td className="card-text">1440 MHz</td>
                <td className="card-text">1740 MHz</td>
                <td className="card-text">Black</td>
                <td className="card-text">299.9 mm</td>
                <td className="card-text">5 <i className="fa fa-star star-activate" ></i></td>
                <td className="card-text">$89.98</td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm">Add</button>
                </td>
            </tr>
        )
    }
}

export default VideoCardCard;