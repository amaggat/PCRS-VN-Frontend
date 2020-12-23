import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../List.css'

import demo from '../../Product/Part/CPU/cpu-demo.jpeg'

class CPUCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpu: JSON.parse(localStorage.getItem('cpu'))
        }
        console.log(this.state.cpu);
    }

    componentDidMount() {
        window.scrollTo(0,-100000);
    }

    remove = () => {
        localStorage.removeItem('cpu');
        this.setState({cpu: null});
    }

    render() {
        const { cpu } = this.state;
        return (
            <tr>
                <td className="row-title"><Link className="component" id="" to="/products/cpu">CPU</Link></td>
                <td>
                { cpu ?
                    <Link className="wrap-product-img" to={`/products/cpu/${cpu.id}`}>
                        {/* TODO: replace demo to cpu.img */}
                        <img className="product-img" src={demo} alt={cpu.id}/> 
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
                <td className="base">
                    {cpu ? cpu.base : null}
                </td>
                <td className="promo"></td>
                <td className="snipping"></td>
                <td className="tax"></td>
                <td className="price"></td>
                <td className="where"></td>
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