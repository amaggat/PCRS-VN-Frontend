import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import img from '../../Product/Part/Memory/memory-demo.jpeg'
import formatMoney from '../../../Components/Page/CurrencyFormat';

class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memory: JSON.parse(localStorage.getItem('memory'))
        }
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('memory');
        this.setState({memory: null});
        window.location.reload()
    }

    render() {
        const {memory} = this.state

        return (
            <tr className="product-card">
                <td className="row-title"><Link className="vertical-center" id="" to="/products/memory">Memory</Link></td>
                <td>
                { memory ?
                    <Link className="wrap-product-img" to={`/products/memory/${memory.id}`}>
                        <img className="product-img" src={memory.img ? memory.img : img} alt={memory.id}/> 
                        <span>
                            {memory.fullname}
                        </span>
                    </Link>
                    :
                    <Link type="button" className="btn btn-primary btn-sm" to="/products/memory">
                        <i className="fas fa-plus" />
                        Choose a Memory
                    </Link>
                }
                </td>
                <td className="base row-title">
                    <div className="vertical-center">{memory ? formatMoney(memory.price) + "VND" : null}</div>
                </td>
                <td className="promo row-title">
                    <div className="vertical-center">{
                        memory ?
                            memory.promo ? 
                                memory.promo
                                :
                                null
                            :
                        null
                        }</div>
                </td>
                <td className="snipping row-title">
                    <div className="vertical-center">{
                        memory ?
                        memory.snipping ? 
                            memory.snipping
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="tax row-title">
                    <div className="vertical-center">{
                        memory ?
                        memory.tax ? 
                            memory.tax
                            :
                            null
                        :
                    null
                    }</div>
                </td>
                <td className="price row-title">
                    <div className="vertical-center">{
                        memory ?
                            memory.promo ? 
                                formatMoney(memory.price * memory.promo) + "VND"
                                :
                                formatMoney(memory.price) + "VND"
                            :
                        null
                    }</div>
                </td>
                <td className="where">
                    <div>
                        {
                            memory ?
                                <Link className="contain-img" to={memory.link}>
                                    <img className="product-img" src={memory.logo ? memory.logo : img} alt={memory.id}/>
                                </Link>
                            : null
                        }
                    </div>
                </td>
                <td className="delete">
                    {
                    memory ?
                        <div onClick={this.remove}><i class="delete fas fa-times"></i></div>
                        :
                        null
                    }
                </td>
            </tr>
        )
    }
}

export default MemoryCard;