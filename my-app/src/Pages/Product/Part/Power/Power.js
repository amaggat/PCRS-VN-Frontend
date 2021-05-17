import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'
import img from './power-demo.jpeg'
import PowerService from '../../../../Client/PowerService'
import { Link, withRouter } from 'react-router-dom';
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import PowerFilter from './PowerFilter';

class Power extends Component {
    constructor(props) {
        super(props);
        this.state = {
            powers: [],
            totalPages: 0,
            totalElements: 0,
            pageNumber: 0,
            searchList: {},
        }
    }

    componentDidMount() {
        const {pageNumber} = this.state
        PowerService.getSearchPower({pageNumber}).then((response) => {
            this.setState({
                powers: response.data.content,
                totalPages: response.data.totalPages,
                totalElements: response.data.totalElements,
            })
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidUpdate(props, prevState) {
        const {pageNumber, searchList} = this.state
        if (prevState.pageNumber === pageNumber && prevState.searchList === searchList) {
            return
        }
        PowerService.getSearchPower({pageNumber, searchList}).then((response) => {
            this.setState({
                powers: response.data.content,
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
                    <h1 className="text-center">Choose A PSU</h1>
                </div>

                <div class="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row ">
                        <div class="col-2">
                            <PowerFilter search={this.search}/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct total={this.state.totalElements} search={this.search}/>
                            <table class="table">
                                <thead>
                                    <tr class="product-title">
                                        <th></th>
                                        {/* <th scope="col" class="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" class="font-weight-bold" id="name">Name</th>
                                        <th scope="col" class="font-weight-bold" id="chipset">Standard</th>
                                        <th scope="col" class="font-weight-bold" id="power">Chipset</th>
                                        <th scope="col" class="font-weight-bold" id="power">Wattage</th>
                                        <th scope="col" class="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" class="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.powers.map(
                                            power =>
                                            <tr className="product-card" key={power.id}>
                                                <td scope="row"><input type="checkbox" value=""/></td>
                                                <td className="preview card-text">
                                                    <Link to={`/products/Power/${power.id}`}>
                                                        <img src={(power.priceList)?.length <= 0 ? img : power.image} alt={power.id}/>
                                                        <span>{power.fullname}</span>
                                                    </Link>
                                                </td>
                                                <td className="card-text">{power.standard_80}</td>
                                                <td className="card-text">{power.chipset}</td>
                                                <td className="card-text">{power.power}</td>
                                                <td className="card-text">{power.averageRating || '-'}<i className="fa fa-star" ></i></td>
                                                <td className="card-text">{power.priceList?.length <= 0 ? "-" : formatMoney(power.priceList[0].price) + "VND"}</td>
                                                <td>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={()=>PowerService.setPower2List(power)}>Add</button>
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

export default Power;