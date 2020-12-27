import React, { Component } from 'react';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'

import { Link } from 'react-router-dom';
import MemoryService from '../../../../Client/MemoryService'
import img from './memory-demo.jpeg'
import formatMoney from '../../../../Components/Page/CurrencyFormat';
import MemoryFilter from './MemoryFilter';

class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memories: [],
            totalPages: 0,
            totalElements: 0,
            pageNumber: 0,
            searchList: {},
        }
    }

    componentDidMount() {
        const {pageNumber} = this.state
        MemoryService.getSearchMemory({pageNumber}).then((response) => {
            this.setState({
                memories: response.data.content,
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
        MemoryService.getSearchMemory({pageNumber, searchList}).then((response) => {
            this.setState({
                memories: response.data.content,
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
                    <h1 className="text-center">Choose A Memory</h1>
                </div>

                <div className="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="row">
                        <div className="col-2">
                            <MemoryFilter search={this.search}/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct total={this.state.totalElements} search={this.search}/>
                            <table className="table">
                                <thead>
                                    <tr className="product-title">
                                        <th></th>
                                        {/* <th scope="col" className="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" className="font-weight-bold" id="name" >Name</th>
                                        <th scope="col" className="font-weight-bold" id="speed">Clock speed</th>
                                        <th scope="col" className="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" className="font-weight-bold" id="modules">Modules</th>
                                        <th scope="col" className="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" className="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.memories.map(
                                            memory => 
                                            <tr className="product-card" key={memory.id}>
                                                <td><input type="checkbox" value=""/></td>
                                                <td className="preview card-text">
                                                    <Link to={`/products/memory/${memory.id}`}>
                                                        <img src={(memory.priceList)?.length <= 0 ? img : memory.priceList[0]?.img} alt={memory.id}/>
                                                        <span>{memory.fullname}</span>
                                                    </Link>
                                                </td>
                                                <td className="card-text">{memory.clockSpeed}</td>
                                                <td className="card-text">{memory.chipset}</td>
                                                <td className="card-text">{memory.sizeOfRam}</td>
                                                <td className="card-text">- <i className="fa fa-star star-activate" ></i></td>
                                                <td className="card-text">{memory.priceList?.length <= 0 ? "-" : formatMoney(memory.priceList[0].price) + "VND"}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>MemoryService.setMemory2List(memory)}>Add</button>
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

export default Memory;