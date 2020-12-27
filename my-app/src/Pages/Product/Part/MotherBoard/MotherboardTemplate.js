import React, { useState, useEffect } from 'react';
import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import img from './motherboard-demo.jpeg';

import '../ProductSample.css';
import ImageSlider from '../../../../Components/Page/ImageSlider';
import { useParams } from 'react-router-dom';
import MotherboardService from '../../../../Client/MotherboardService';
import formatMoney from '../../../../Components/Page/CurrencyFormat';

function MotherboardTemplate () {
    const {id} = useParams();
    const [motherboard, setMotherboard] = useState({});
    useEffect(() => {
        MotherboardService.getMotherboardbyID(id).then(response => {
            setMotherboard(response.data)
        })
        .catch(console.log);
    },[id])

    return (
        <div className="product-detail white-back">
            <Header />
            <div className="banner text-center">
                <p className="banner-title">PRODUCT DETAIL</p>
                <p className="banner-name">{motherboard.fullname}</p>
            </div>

            <div className="w-container">
                <div className="row">
                    <div className="col-lg-4 left">
                        <div className="block img">
                            <ImageSlider arr={motherboard.priceList?.map(element => {return (element)})} img={img}/>
                        </div>
                        <div className="block action form-group row justify-content-md-center">
                            <div className="col-lg action-function">
                                <button type="button" className="btn btn-primary" onClick={()=>MotherboardService.setMotherboard2List(motherboard)}>Add to your Build</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 right">
                        <div className="block detail-text">
                            <div className="detail-title">Price</div>
                            <div className="detail-price row">
                                <table className="table table-hover detail-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Retailer</th>
                                            <th scope="col">Base</th>
                                            <th scope="col">Promo</th>
                                            <th scope="col">Total</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        motherboard.priceList?.map(element => {
                                            return (
                                                <tr>
                                                    <td className="retailer-img vertical-container">
                                                        <img className="" src={element.logo} alt="retailer"/>
                                                    </td>
                                                    <td className="base vertical-container">
                                                        <div className="vertical">
                                                            {formatMoney(+element.price)} VND
                                                        </div>
                                                    </td>
                                                    <td className="promo vertical-container">
                                                        <div className="vertical text-center">
                                                            {element.promo ? element.promo : "-"}
                                                        </div>
                                                    </td>
                                                    <td className="total vertical-container">
                                                        <div className="vertical">
                                                            {element.promo ? formatMoney(+(element.promo*element.price)) : formatMoney(+element.price) }
                                                        </div>
                                                    </td>
                                                    <td className="buy-button vertical-container">
                                                        <a target="_blank" rel="noreferrer" className="btn btn-success vertical" href={element.link}>Buy</a>
                                                    </td>   
                                                </tr>
                                            )})
                                        }
                                    </tbody>
                                </table>
                            </div>  

                            <div className="block detail-text">
                                <ul>
                                    <div className="detail-title ">Specifications</div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="manufaturer">
                                        <p className="title">Manufacturer</p>
                                        <p className="body">{motherboard.manufacturer}</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Serie Name</p>
                                        <p className="body">{motherboard.serieName}</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Memory Max</p>
                                        <p className="body">{motherboard.sizeofram}</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Memory Slot</p>
                                        <p className="body">{motherboard.memory_slot}</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Chipset</p>
                                        <p className="body">{motherboard.chipset}</p>
                                    </div>
                                </ul>
                                <ul>
                                    <div className="detail-block border-bottom" id="serieName">
                                        <p className="title">Socket</p>
                                        <p className="body">{motherboard.socket}</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MotherboardTemplate;