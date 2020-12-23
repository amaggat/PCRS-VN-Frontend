import React, { Component, useEffect, useState } from 'react';
import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import img from './cpu-demo.jpeg';

import '../ProductSample.css';

import { useParams } from 'react-router-dom';
import Service from '../../../../Client/Service';
import CPU from './CPU';

import formatMoney from '../../../../Components/Page/CurrencyFormat';

function setCPU2List(cpu) {
    localStorage.setItem('cpu', JSON.stringify(cpu));
    console.log(localStorage);
    window.location.replace('/list');
}

function CPUTemplate () {
    const {id} = useParams();
    const [cpu, setCPU] = useState({});
    useEffect(() => {
        Service.getCPUbyID(id).then(response => {
            setCPU(response.data)
            console.log(response.data);
        })
        .catch(console.log);
    },[id])

    return (
        <div className="product-detail white-back">
            <Header />
            <div className="banner text-center">
                <p className="banner-title">PRODUCT DETAIL</p>
                <p className="banner-name">{cpu.fullname}</p>
            </div>

            <div className="w-container">
                <div className="row">
                    <div className="col-lg-4 left">
                        <div className="block img">
                            <img src={img} alt="CPU-sample" className="detail-img"/>
                        </div>
                        <div className="block action form-group row justify-content-md-center">
                            {/* <div className="col-sm-2 action-function">
                                <label for="quantity" className="form-title text-center">QTY</label>
                            </div>
                            <div className="col-sm-2 action-function ">
                                <select class="form-control" id="quantity">
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div> */}
                            <div className="col-lg action-function">
                                <button type="button" className="btn btn-primary" onClick={()=>setCPU2List(cpu)}>Add to your Build</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 right">
                        <div className="block detail-text">
                            <div className="detail-title row">Price</div>
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
                                        cpu.cpuPriceList?.map(e => {
                                            return (
                                                <tr>
                                                    <td className="retailer-img vertical-container">
                                                        <img className="" src={e.img} alt="retailer"/>
                                                    </td>
                                                    <td className="base vertical-container">
                                                        <div className="vertical">
                                                            {formatMoney(+e.price)} VND
                                                        </div>
                                                    </td>
                                                    <td className="promo vertical-container">
                                                        <div className="vertical text-center">
                                                            {e.promo ? e.promo : "-"}
                                                        </div>
                                                    </td>
                                                    <td className="total vertical-container">
                                                        <div className="vertical">
                                                            {e.promo ? formatMoney(+(e.promo*e.price)) : formatMoney(+e.price) }
                                                        </div>
                                                    </td>
                                                    <td className="buy-button vertical-container">
                                                        <a target="_blank" className="btn btn-success vertical" href={e.link}>Buy</a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                                
                            </div>
                            
                        </div>

                        <div className="block detail-text">
                            <ul>
                                <div className="detail-title ">Specifications</div>
                            </ul>
                            <ul>
                                <div className="detail-block border-bottom" id="manufaturer">
                                    <p className="title">Manufaturer</p>
                                    <p className="body">{cpu.manufacturer}</p>
                                </div>
                            </ul>
                            <ul>
                                <div className="detail-block border-bottom" id="serieName">
                                    <p className="title">Series</p>
                                    <p className="body">{cpu.serieName}</p>
                                </div>
                            </ul>
                            <ul>
                                <div className="detail-block border-bottom" id="serieName">
                                    <p className="title">Core</p>
                                    <p className="body">{cpu.cores}</p>
                                </div>
                            </ul>
                            <ul>
                                <div className="detail-block border-bottom" id="serieName">
                                    <p className="title">Thread</p>
                                    <p className="body">{cpu.threads}</p>
                                </div>
                            </ul>
                            <ul>
                                <div className="detail-block border-bottom" id="serieName">
                                    <p className="title">Socket</p>
                                    <p className="body">{cpu.socket}</p>
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

export default CPUTemplate;