import React, { useEffect, useState } from 'react';
import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import img from './hdd-demo.jpeg';

import '../ProductSample.css';

import { useParams } from 'react-router-dom';
import HDDService from '../../../../Client/HDDService';

import ImageSlider from '../../../../Components/Page/ImageSlider'
import formatMoney from '../../../../Components/Page/CurrencyFormat';

function SSDTemplate () {
    const {id} = useParams();
    const [hdd, setHDD] = useState({});
    useEffect(() => {
        HDDService.getHDDbyID(id).then(response => {
            setHDD(response.data)
        })
        .catch(console.log);
    },[id])

    console.log(hdd)

    return (
        <div className="product-detail white-back">
            <Header />
            <div className="banner text-center">
                <p className="banner-title">PRODUCT DETAIL</p>
                <p className="banner-name">{hdd.fullname}</p>
            </div>

            <div className="w-container">
                <div className="row">
                    <div className="col-lg-4 left">
                        <div className="block img">
                            <ImageSlider arr={hdd.priceList?.map(element => {return (element)})} img={img} />
                        </div>
                        <div className="block action form-group row justify-content-md-center">
                            <div className="col-lg action-function">
                                <button type="button" className="btn btn-primary" onClick={()=>HDDService.setHDD2List(hdd)}>Add to your Build</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 right">
                        <div className="block detail-text">
                            <div className="detail-title row">Price</div>
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
                                        hdd.priceList?.map(element => {
                                            return (
                                                <tr>
                                                    <td className="retailer-img vertical-container">
                                                        <img className="" src={element.logo} alt="retailer"/>
                                                    </td>
                                                    <td className="base vertical-container">
                                                        <div className="vertical">
                                                            {formatMoney(+element.price)}VND
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
                                <div className="detail-block border-bottom">
                                    <p className="title">Manufacturer</p>
                                    <p className="body">{hdd.manufacturer}</p>
                                </div>
                            </ul>
                            <ul>
                                <div className="detail-block border-bottom">
                                    <p className="title">Size</p>
                                    <p className="body">{hdd.size}</p>
                                </div>
                            </ul>
                            <ul>
                                <div className="detail-block border-bottom" id="serieName">
                                    <p className="title">Serie Name</p>
                                    <p className="body">{hdd.serieName}</p>
                                </div>
                            </ul>
                            <ul>
                                <div className="detail-block border-bottom" id="serieName">
                                    <p className="title">Chipset</p>
                                    <p className="body">{hdd.chipset}</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default SSDTemplate;