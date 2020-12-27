import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'
import img from './hdd-demo.jpeg'
import HDDService from '../../../../Client/HDDService'
import { Link, withRouter } from 'react-router-dom';
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import HDDFilter from './HDDFilter';

class VideoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hdds: [],
            totalPages: 0,
            totalElements: 0,
            pageNumber: 0,
            searchList: {},
        }
    }

    componentDidMount() {
        const {pageNumber} = this.state
        HDDService.getSearchHDD({pageNumber}).then((response) => {
            this.setState({
                hdds: response.data.content,
                totalPages: response.data.totalPages,
                totalElements: response.data.totalElements,
            })
        }).catch(err => {
            console.log(err);
        });
        console.log(this.state)
    }

    componentDidUpdate(props, prevState) {
        const {pageNumber, searchList} = this.state
        if (prevState.pageNumber === pageNumber && prevState.searchList === searchList) {
            return
        }
        HDDService.getSearchHDD({pageNumber, searchList}).then((response) => {
            this.setState({
                hdds: response.data.content,
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
                    <h1 className="text-center">Choose A HDD</h1>
                </div>

                <div class="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row ">
                        <div class="col-2">
                            <HDDFilter search={this.search}/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct total={this.state.totalElements} search={this.search}/>
                            <table class="table">
                                <thead>
                                    <tr class="product-title">
                                        <th></th>
                                        {/* <th scope="col" class="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" class="font-weight-bold" id="name">Name</th>
                                        <th scope="col" class="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" class="font-weight-bold" id="memory">Storage</th>
                                        <th scope="col" class="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" class="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.hdds.map(
                                            hdd => 
                                            <tr className="product-card">
                                                <td><input type="checkbox" value=""/></td>
                                                <td className="preview card-text">
                                                    <Link to={`/products/hdd/${hdd.id}`}>
                                                        <img src={(hdd.priceList)?.length <= 0 ? img : hdd.priceList[0]?.img} alt={hdd.id}/>
                                                        <span>{hdd.fullname}</span>
                                                    </Link>
                                                </td>
                                                <td className="card-text">{hdd.chipset}</td>
                                                <td className="card-text">{hdd.storage}</td>
                                                <td className="card-text">- <i className="fa fa-star star-activate"></i></td>
                                                <td className="card-text">{hdd.priceList?.length <= 0 ? "-" : formatMoney(hdd.priceList[0].price) + "VND"}</td>
                                                <td>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={()=>HDDService.setHDD2List(hdd)}>Add</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <PageNav/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default VideoCard;