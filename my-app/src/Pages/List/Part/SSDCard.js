import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import img from '../../Product/Part/SSD/ssd-demo.jpeg'
import formatMoney from '../../../Components/Page/CurrencyFormat';

class SSDCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ssd: JSON.parse(localStorage.getItem('ssd'))
        }
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('ssd');
        this.setState({ssd: null});
        window.location.reload()
    }

    render() {
        const { ssd } = this.state;
        return (
            <tr className="product-card">
                <td className="row-title"><Link className="vertical-center" id="" to="/products/ssd">Solid State Drive</Link></td>
                <td>
                { ssd ?
                    <Link className="wrap-product-img" to={`/products/ssd/${ssd.id}`}>
                        <img className="product-img" src={ssd.img ? ssd.img : img} alt={ssd.id}/> 
                        <span>
                            {ssd.fullname}
                        </span>
                    </Link>
                    :
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/ssd">
                        <i className="fas fa-plus" />
                        Choose a SSD
                    </Link>
                }
                </td>
                <td className="base row-title">
                    <div className="vertical-center">{ssd ? formatMoney(ssd.price) + "VND" : null}</div>
                </td>
                <td className="promo row-title">
                    <div className="vertical-center">{ssd ?
                            ssd.promo ? 
                                ssd.promo
                                :
                                null
                            :
                        null
                    }</div>
                </td>
                <td className="snipping row-title">
                    <div className="vertical-center">{
                        ssd ?
                        ssd.snipping ? 
                            ssd.snipping
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="tax row-title">
                    <div className="vertical-center">{
                        ssd ?
                        ssd.tax ? 
                            ssd.tax
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="price row-title">
                    <div className="vertical-center">
                        {
                            ssd ?
                                ssd.promo ? 
                                    formatMoney(ssd.price * ssd.promo) + "VND"
                                    :
                                    formatMoney(ssd.price) + "VND"
                                :
                            null
                        }
                    </div>
                </td>
                <td className="where">
                <div>
                        {
                            ssd ?
                                <Link className="contain-img" to={ssd.link}>
                                    <img className="product-img" src={ssd.logo ? ssd.logo : img} alt={ssd.id}/>
                                </Link>
                            : null
                        }
                    </div>
                </td>
                <td className="delete">
                    {
                    ssd ?
                        <div onClick={this.remove}><i class="delete fas fa-times"></i></div>
                        :
                        null
                    }
                </td>
            </tr>

        )
    }
}

export default SSDCard;