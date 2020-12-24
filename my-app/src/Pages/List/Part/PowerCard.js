import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import img from '../../Product/Part/Power/power-demo.jpeg'

class PowerCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            power: JSON.parse(localStorage.getItem('power'))
        }
        console.log(this.state.power);
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('power');
        this.setState({power: null});
    }
    
    render() {
        const {power} = this.state;
        return (
            <tr>
                <td className="row-title"><Link className="component" id="" to="/products/power">Power Supply</Link></td>
                <td>
                { power ?
                    <Link className="wrap-product-img" to={`/products/cpu/${power.id}`}>
                        <img className="product-img" src={(power.psuPriceList)?.length <= 0 ? img : power.psuPriceList[0]?.img} alt={power.id}/> 
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
                <td className="base"></td>
                <td className="promo"></td>
                <td className="snipping"></td>
                <td className="tax"></td>
                <td className="price"></td>
                <td className="where"></td>
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