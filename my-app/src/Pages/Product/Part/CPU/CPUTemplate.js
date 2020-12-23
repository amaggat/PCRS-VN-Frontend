import React, { useEffect, useState } from 'react';
import Footer from '../../../../Components/Footer/Footer';
import Header from '../../../../Components/Header/Header';
import img from './cpu-demo.jpeg';

import '../ProductSample.css';

import { useParams } from 'react-router-dom';
import Service from '../../../../Client/Service';

import formatMoney from '../../../../Components/Page/CurrencyFormat';

function setCPU2List(cpu) {
    localStorage.setItem('cpu', JSON.stringify(cpu));
    window.location.replace('/list');
}


const ImageSlider = ({ cpu }) => {
    const [current, setCurrent] = useState(0);
    const arr =  cpu.cpuPriceList?.map(e => {return (e)})

    const length = arr?.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current);

    if (!Array.isArray(arr) || arr.length <= 0) {
        return (
            <div class="block img">
                <img className="detail-img" src={img} alt={cpu.id}/>
            </div>
        )
    }

    return (
        <div class="slider">
            <i class="fas fa-arrow-left left-arrow" onClick={prevSlide}></i>
            <i class="fas fa-arrow-right right-arrow" onClick={nextSlide}></i>
            {arr.map((element, index) => {
                return (
                    <div className={`block img slide ${index === current ? "active" : ""}`} key={index}>
                        {index === current && (
                            <img className="detail-img" src={element.img} alt={cpu.id}/>
                        )}
                    </div>
                )})}
        </div>
    )
}

function CPUTemplate () {
    const {id} = useParams();
    const [cpu, setCPU] = useState({});
    useEffect(() => {
        Service.getCPUbyID(id).then(response => {
            setCPU(response.data)
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
                        <ImageSlider cpu={cpu}/>
                        
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
                                        cpu.cpuPriceList?.map(element => {
                                            return (
                                                <tr>
                                                    <td className="retailer-img vertical-container">
                                                        <img className="" src={element.img} alt="retailer"/>
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
                            <ul>div
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