import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import img from '../../Product/Part/MotherBoard/motherboard-demo.jpeg'
import formatMoney from '../../../Components/Page/CurrencyFormat';

class MotherBoardCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motherboard: JSON.parse(localStorage.getItem('motherboard'))
        }
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('socket');
        localStorage.removeItem('motherboard');
        this.setState({motherboard: null});
        window.location.reload()
    }

    render() {
        const {motherboard} = this.state

        return (
            <tr className="product-card">
                <td className="row-title"><Link className="vertical-center" id="" to="/products/motherboard">Motherboard</Link></td>
                <td>
                { motherboard ?
                    <Link className="wrap-product-img" to={`/products/motherboard/${motherboard.id}`}>
                        <img className="product-img" src={motherboard.img ? motherboard.img : img} alt={motherboard.id}/> 
                        <span>
                            {motherboard.fullname}
                        </span>
                    </Link>
                    :
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/motherboard">
                        <i className="fas fa-plus" />
                        Choose a Motherboard
                    </Link>
                }
                </td>
                <td className="base row-title">
                    <div className="vertical-center">{motherboard ? formatMoney(motherboard.price) + "VND" : null}</div>
                </td>
                <td className="promo row-title">
                    <div className="vertical-center">{
                        motherboard ?
                            motherboard.promo ? 
                                motherboard.promo
                                :
                                null
                            :
                        null
                        }</div>
                </td>
                <td className="snipping row-title">
                    <div className="vertical-center">{
                        motherboard ?
                        motherboard.snipping ? 
                            motherboard.snipping
                            :
                            null
                        :
                        null
                    }</div>
                </td>
                <td className="tax row-title">
                    <div className="vertical-center">{
                        motherboard ?
                        motherboard.tax ? 
                            motherboard.tax
                            :
                            null
                        :
                        null
                    }</div>
                </td>
                <td className="price row-title">
                    <div className="vertical-center">{
                        motherboard ?
                            motherboard.promo ? 
                                formatMoney(motherboard.price * motherboard.promo) + "VND"
                                :
                                formatMoney(motherboard.price) + "VND"
                            :
                        null
                    }</div>
                </td>
                <td className="where">
                    <div>
                        {
                            motherboard ?
                                <Link className="contain-img" to={motherboard.link}>
                                    <img className="product-img" src={motherboard.logo ? motherboard.logo : img} alt={motherboard.id}/>
                                </Link>
                            : null
                        }
                    </div>
                </td>
                <td className="delete">
                    {
                    motherboard ?
                        <div onClick={this.remove}><i class="delete fas fa-times"></i></div>
                        :
                        null
                    }
                </td>
            </tr>
        )
    }
}

export default MotherBoardCard;