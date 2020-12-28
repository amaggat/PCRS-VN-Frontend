import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import formatMoney from '../../../Components/Page/CurrencyFormat';
import img from '../../Product/Part/VideoCard/video-card-demo.jpeg'

class GPUCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videocard: JSON.parse(localStorage.getItem('video-card'))
        }
        // console.log(this.state.videocard);
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('video-card');
        this.setState({videocard: null});
        window.location.reload()
    }

    render() {
        const {videocard} = this.state;

        return (
            <tr className="product-card">
                <td className="row-title"><Link className="vertical-center" id="" to="/products/video-card">Videocard</Link></td>
                <td>
                { videocard ?
                    <Link className="wrap-product-img" to={`/products/video-card/${videocard.id}`}>
                        <img className="product-img" src={videocard.img ? videocard.img : img} alt={videocard.id}/> 
                        <span>
                            {videocard.fullname}
                        </span>
                    </Link>
                    :
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/video-card">
                        <i className="fas fa-plus" />
                        Choose a Videocard
                    </Link>
                }
                </td>
                <td className="base row-title">
                    <div className="vertical-center">{videocard ? formatMoney(videocard.price) + "VND" : null}</div>
                </td>
                <td className="promo row-title">
                    <div className="vertical-center">{
                        videocard ?
                            videocard.promo ? 
                                videocard.promo
                                :
                                null
                            :
                        null
                        }</div>
                </td>
                <td className="snipping row-title">
                    <div className="vertical-center">{
                        videocard ?
                        videocard.snipping ? 
                            videocard.snipping
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="tax row-title">
                    <div className="vertical-center">{
                        videocard ?
                        videocard.tax ? 
                            videocard.tax
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="price row-title">
                    <div className="vertical-center">{
                        videocard ?
                            videocard.promo ? 
                                formatMoney(videocard.price * videocard.promo) + "VND"
                                :
                                formatMoney(videocard.price) + "VND"
                            :
                        null
                    }</div>
                </td>
                <td className="where">
                    <div>
                        {
                            videocard ?
                                <Link className="contain-img" to={videocard.link}>
                                    <img className="product-img" src={videocard.logo ? videocard.logo : img} alt={videocard.id}/>
                                </Link>
                            : null
                        }
                    </div>
                </td>
                <td className="delete">
                    {
                    videocard ?
                        <div onClick={this.remove}><i class="delete fas fa-times"></i></div>
                        :
                        null
                    }
                </td>
            </tr>
        )
    }
}

export default GPUCard;