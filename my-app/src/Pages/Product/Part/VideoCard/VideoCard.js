import React, { Component } from 'react';
import ProductFilter from '../ProductFilter';
import TopFunctionProduct from '../TopFunctionProduct';
import Header from '../../../../Components/Header/Header';
import Footer from '../../../../Components/Footer/Footer';
import PageNav from '../../../../Components/Page/PageNav';

import '../../Product.css'
import img from './video-card-demo.jpeg'
import VideocardService from '../../../../Client/VideocardService'
import { Link, withRouter } from 'react-router-dom';
import formatMoney from '../../../../Components/Page/CurrencyFormat';

class VideoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videocards: []
        }
    }
    
    componentDidMount() {
        VideocardService.getGPUs().then((response) => {
            this.setState({
                videocards: response.data
            })
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return ( 
            <div className="product white-back">
                <Header />
                <div className="product-banner">
                    <h1 className="text-center">Choose A Video Card</h1>
                </div>

                <div class="tab-pane w-container" id="pills-product" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row ">
                        <div class="col-2">
                            <ProductFilter/>
                        </div>
                        <div className="col-10">
                            <TopFunctionProduct/>
                            <table class="table">
                                <thead>
                                    <tr class="product-title">
                                        <th></th>
                                        {/* <th scope="col" class="font-weight-bold"><input type="checkbox" value=""/></th> */}
                                        <th scope="col" class="font-weight-bold" id="name">Name</th>
                                        <th scope="col" class="font-weight-bold" id="chipset">Chipset</th>
                                        <th scope="col" class="font-weight-bold" id="memory">Memory</th>
                                        <th scope="col" class="font-weight-bold" id="rating">Rating</th>
                                        <th scope="col" class="font-weight-bold" id="price">Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.videocards.map(
                                            gpu => 
                                            <tr className="product-card">
                                                <td><input type="checkbox" value=""/></td>
                                                <td className="preview card-text">
                                                    <Link to={`/products/video-card/${gpu.id}`}>
                                                        <img src={(gpu.priceList)?.length <= 0 ? img : gpu.priceList[0]?.img} alt={gpu.id}/>
                                                        <span>{gpu.fullname}</span>
                                                    </Link>
                                                </td>
                                                <td className="card-text">{gpu.chipset}</td>
                                                <td className="card-text">{gpu.vram}</td>
                                                <td className="card-text">- <i className="fa fa-star star-activate"></i></td>
                                                <td className="card-text">{gpu.priceList?.length <= 0 ? "-" : formatMoney(gpu.priceList[0].price) + "VND"}</td>
                                                <td>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={()=>VideocardService.setGPU2List(gpu)}>Add</button>
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