import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import img from '../../Product/Part/CPU/cpu-demo.jpeg'
import formatMoney from '../../../Components/Page/CurrencyFormat';

class CPUCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpu: JSON.parse(localStorage.getItem('cpu'))
        }
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('cpu');
        localStorage.removeItem('socket');
        this.setState({cpu: null});
        window.location.reload()
    }

    render() {
        const { cpu } = this.state;
        return (
            <tr className="product-card">
                <td className="row-title"><Link className="vertical-center" id="" to="/products/cpu">CPU</Link></td>
                <td>
                { cpu ?
                    <Link className="wrap-product-img" to={`/products/cpu/${cpu.id}`}>
                        <img className="product-img" src={cpu.img ? cpu.img : img} alt={cpu.id}/> 
                        <span>
                            {cpu.fullname}
                        </span>
                    </Link>
                    :
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/cpu">
                        <i className="fas fa-plus" />
                        Choose a CPU
                    </Link>
                }
                </td>
                <td className="base row-title">
                    <div className="vertical-center">{cpu ? formatMoney(cpu.price) + "VND" : null}</div>
                </td>
                <td className="promo row-title">
                    <div className="vertical-center">{cpu ?
                            cpu.promo ? 
                                cpu.promo
                                :
                                null
                            :
                        null
                    }</div>
                </td>
                <td className="snipping row-title">
                    <div className="vertical-center">{
                        cpu ?
                        cpu.snipping ? 
                            cpu.snipping
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="tax row-title">
                    <div className="vertical-center">{
                        cpu ?
                        cpu.tax ? 
                            cpu.tax
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="price row-title">
                    <div className="vertical-center">
                        {
                            cpu ?
                                cpu.promo ? 
                                    formatMoney(cpu.price * cpu.promo) + "VND"
                                    :
                                    formatMoney(cpu.price) + "VND"
                                :
                            null
                        }
                    </div>
                </td>
                <td className="where">
                <div>
                        {
                            cpu ?
                                <a className="contain-img" target="_blank" rel="noreferrer" href={cpu.link}>
                                    <img className="product-img" src={cpu.logo ? cpu.logo : img} alt={cpu.id}/>
                                </a>
                            : null
                        }
                    </div>
                </td>
                <td className="delete">
                    {
                    cpu ?
                        <div onClick={this.remove}><i class="delete fas fa-times"></i></div>
                        :
                        null
                    }
                </td>
            </tr>

        )
    }
}

export default CPUCard;