import React, { Component } from 'react';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import CPUFilter from './CPUFilter';
import '../../Product.css'
import img from './cpu-demo.jpeg'
import CPUService from '../../../../Client/CPUService'
import { Link, withRouter } from 'react-router-dom';
import formatMoney from '../../../../Components/Page/CurrencyFormat';

class CPU extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpus: [],
            totalPages: 0,
            totalElements: 0,
            pageNumber: 0,
            searchList: {},
        }
    }

    componentDidMount() {
        const {pageNumber} = this.state

        CPUService.getSearchCPU({pageNumber}).then((response) => {
            this.setState({
                cpus: response.data.content,
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

        if(prevState.searchList !== searchList) {
            this.setState({
                pageNumber: 0,
            })
        }

        if (prevState.pageNumber === pageNumber && prevState.searchList === searchList) {
            return;
        }
        CPUService.getSearchCPU({pageNumber, searchList}).then((response) => {
            this.setState({
                cpus: response.data.content,
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
                    <h1 className="text-center">Choose A CPU</h1>
                </div>

                <div className="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="row ">
                        <div className="col-2">
                            <CPUFilter search={this.search}/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct total={this.state.totalElements} search={this.search}/>
                            <table className="table">
                                <thead className="product-card-head">
                                    <tr className="product-title">
                                        <th></th>
                                        {/* <th scope="col" className="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" className="font-weight-bold" id="name">Name</th>
                                        <th scope="col" className="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" className="font-weight-bold" id="core">Core</th>
                                        <th scope="col" className="font-weight-bold" id="thread">Thread</th>
                                        <th scope="col" className="font-weight-bold" id="socket">Socket</th>
                                        <th scope="col" className="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" className="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.cpus.map(
                                            cpu =>
                                            <tr className="product-card" key={cpu.id}>
                                                <td><input type="checkbox" value=""/></td>
                                                <td className="preview card-text">
                                                    <Link to={`/products/cpu/${cpu.id}`}>
                                                        <img src={(cpu.priceList)?.length <= 0 ? img : cpu.priceList[0]?.img} alt={cpu.id}/>
                                                        <span>{cpu.fullname}</span>
                                                    </Link>
                                                </td>

                                                <td className="card-text">{cpu.chipset}</td>
                                                <td className="card-text">{cpu.cores}</td>
                                                <td className="card-text">{cpu.threads}</td>
                                                <td className="card-text">{cpu.socket}</td>
                                                <td className="card-text">-<i className="fa fa-star star-activate"></i></td>
                                                <td className="card-text">{cpu.priceList?.length <= 0 ? "-" : formatMoney(cpu.priceList[0].price) + "VND"}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>CPUService.setCPU2List(cpu)}>Add</button>
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

export default withRouter(CPU);
