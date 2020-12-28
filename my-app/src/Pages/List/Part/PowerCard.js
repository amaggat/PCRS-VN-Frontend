import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import formatMoney from '../../../Components/Page/CurrencyFormat';
import img from '../../Product/Part/Power/power-demo.jpeg'

class PowerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            power: JSON.parse(localStorage.getItem('power'))
        }
        // console.log(this.state.power);
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('power');
        this.setState({power: null});
        window.location.reload()
    }
    
    render() {
        const {power} = this.state;

        return (
            <tr className="product-card">
                <td className="row-title"><Link className="vertical-center" id="" to="/products/power">Power Supply</Link></td>
                <td>
                { power ?
                    <Link className="wrap-product-img" to={`/products/power/${power.id}`}>
                        <img className="product-img" src={power.img ? power.img : img} alt={power.id}/> 
                        <span>
                            {power.fullname}
                        </span>
                    </Link>
                    :
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/power">
                        <i className="fas fa-plus" />
                        Choose a Power
                    </Link>
                }
                </td>
                <td className="base row-title">
                    <div className="vertical-center">{power ? formatMoney(power.price) + "VND" : null}</div>
                </td>
                <td className="promo row-title">
                    <div className="vertical-center">{
                        power ?
                            power.promo ? 
                                power.promo
                                :
                                null
                            :
                        null
                        }</div>
                </td>
                <td className="snipping row-title">
                    <div className="vertical-center">{
                        power ?
                        power.snipping ? 
                            power.snipping
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="tax row-title">
                    <div className="vertical-center">{
                        power ?
                        power.tax ? 
                            power.tax
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="price row-title">
                    <div className="vertical-center">{
                        power ?
                            power.promo ? 
                                formatMoney(power.price * power.promo) + "VND"
                                :
                                formatMoney(power.price) + "VND"
                            :
                        null
                    }</div>
                </td>
                <td className="where">
                    <div>
                        {
                            power ?
                                <Link className="contain-img" to={power.link}>
                                    <img className="product-img" src={power.logo ? power.logo : img} alt={power.id}/>
                                </Link>
                            : null
                        }
                    </div>
                </td>
                <td className="delete">
                    {
                    power ?
                        <div onClick={this.remove}><i class="delete fas fa-times"></i></div>
                        :
                        null
                    }
                </td>
            </tr>
        )
    }
}

export default PowerCard;