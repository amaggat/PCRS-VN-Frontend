import React, { Component } from 'react';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'

import { Link } from 'react-router-dom';
import MotherboardService from '../../../../Client/MotherboardService'
import img from './motherboard-demo.jpeg'
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import MotherboardFilter from './MotherboardFilter';

class MotherBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motherboards: [],
            totalPages: 0,
            totalElements: 0,
            pageNumber: 0,
            searchList: {},
        }
    }

    componentDidMount() {
        const {pageNumber} = this.state
        MotherboardService.getSearchMotherboard({pageNumber}).then((response) => {
            this.setState({
                motherboards: response.data.content,
                totalPages: response.data.totalPages,
                totalElements: response.data.totalElements,
            })
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidUpdate(props, prevState) {
        const {pageNumber, searchList} = this.state

        const socket = JSON.parse(localStorage.getItem('socket'))
        if (socket !== null) {
            searchList.socket = socket
        }
        if (prevState.pageNumber === pageNumber && prevState.searchList === searchList) {
            return
        }
        MotherboardService.getSearchMotherboard({pageNumber, searchList}).then((response) => {
            this.setState({
                motherboards: response.data.content,
                totalPages: response.data.totalPages,
                totalElements: response.data.totalElements,
            })
        }).catch(err => {
            console.log(err);
        });
    }

    search = (searchList) => {
        this.setState({searchList})
    }

    render() {
        return ( 
            <div className="product white-back">
                <Header />
                <div className="product-banner">
                    <h1 className="text-center">Choose A MotherBoard</h1>
                </div>

                <div class="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row ">
                        <div class="col-2">
                            <MotherboardFilter search={this.search}/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct total={this.state.totalElements} search={this.search}/>
                            <table class="table">
                                <thead>
                                    <tr className="product-title">
                                        <th></th>
                                        {/* <th scope="col" class="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" class="font-weight-bold" id="name">Name</th>
                                        <th scope="col" class="font-weight-bold" id="socket">Socket / CPU</th>
                                        <th scope="col" class="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" class="font-weight-bold" id="chipset">Form Factor</th>
                                        <th scope="col" class="font-weight-bold" id="size">Memory size</th>
                                        <th scope="col" class="font-weight-bold" id="size">Memory slot</th>
                                        <th scope="col" class="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" class="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.motherboards.map(
                                            motherboard => 
                                            <tr className="product-card" key={motherboard.id}>
                                                <td><input type="checkbox" value=""/></td>
                                                <td className="preview card-text">
                                                    <Link to={`/products/motherboard/${motherboard.id}`}>
                                                        <img src={(motherboard.priceList)?.length <= 0 ? img : motherboard.priceList[0]?.img} alt={motherboard.id}/>
                                                        <span>{motherboard.fullname}</span>
                                                    </Link>
                                                </td>
                                                <td className="card-text">{motherboard.socket}</td>
                                                <td className="card-text">{motherboard.chipset}</td>
                                                <td className="card-text">{motherboard.formfactor}</td>
                                                <td className="card-text">{motherboard.sizeofram}</td>
                                                <td className="card-text">{motherboard.memory_slot}</td>
                                                <td className="card-text">- <i className="fa fa-star star-activate" ></i></td>
                                                <td className="card-text">{motherboard.priceList?.length <= 0 ? "-" : formatMoney(motherboard.priceList[0].price) + "VND"}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>MotherboardService.setMotherboard2List(motherboard)}>Add</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <PageNav totalPages={this.state.totalPages} setPageNumber={(pageNumber) => {this.setState({pageNumber})}} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default MotherBoard;