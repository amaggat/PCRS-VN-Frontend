import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import img from '../../Product/Part/HDD/hdd-demo.jpeg'
import formatMoney from '../../../Components/Page/CurrencyFormat';

class HDDCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hdd: JSON.parse(localStorage.getItem('hdd'))
        }
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('hdd');
        this.setState({hdd: null});
        window.location.reload()
    }

    render() {
        const { hdd } = this.state;
        return (
            <tr className="product-card">
                <td className="row-title"><Link className="vertical-center" id="" to="/products/hdd">Hard Disk Drive</Link></td>
                <td>
                { hdd ?
                    <Link className="wrap-product-img" to={`/products/hdd/${hdd.id}`}>
                        <img className="product-img" src={hdd.img ? hdd.img : img} alt={hdd.id}/> 
                        <span>
                            {hdd.fullname}
                        </span>
                    </Link>
                    :
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/hdd">
                        <i className="fas fa-plus" />
                        Choose a HDD
                    </Link>
                }
                </td>
                <td className="base row-title">
                    <div className="vertical-center">{hdd ? formatMoney(hdd.price) + "VND" : null}</div>
                </td>
                <td className="promo row-title">
                    <div className="vertical-center">{hdd ?
                            hdd.promo ? 
                                hdd.promo
                                :
                                null
                            :
                        null
                    }</div>
                </td>
                <td className="snipping row-title">
                    <div className="vertical-center">{
                        hdd ?
                        hdd.snipping ? 
                            hdd.snipping
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="tax row-title">
                    <div className="vertical-center">{
                        hdd ?
                        hdd.tax ? 
                            hdd.tax
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="price row-title">
                    <div className="vertical-center">
                        {
                            hdd ?
                                hdd.promo ? 
                                    formatMoney(hdd.price * hdd.promo) + "VND"
                                    :
                                    formatMoney(hdd.price) + "VND"
                                :
                            null
                        }
                    </div>
                </td>
                <td className="where">
                <div>
                        {
                            hdd ?
                                <Link className="contain-img" to={hdd.link}>
                                    <img className="product-img" src={hdd.logo ? hdd.logo : img} alt={hdd.id}/>
                                </Link>
                            : null
                        }
                    </div>
                </td>
                <td className="delete">
                    {
                    hdd ?
                        <div onClick={this.remove}><i class="delete fas fa-times"></i></div>
                        :
                        null
                    }
                </td>
            </tr>

        )
    }
}

export default HDDCard;