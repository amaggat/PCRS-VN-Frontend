import React, { useEffect, useState } from 'react';

import ProfileService from '../../Client/ProfileService';

import './Home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import BuildTag from '../Build/BuildTag';

import cpu from './img/nav-cpu.png'
import motherboard from './img/nav-motherboard.png'
import memory from './img/nav-memory.png'
import ssd from './img/nav-ssd.png'
import power from './img/nav-powersupply.png'
import videocard from './img/nav-videocard.png'
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        ProfileService.getProfiles({}).then((response) => {
            let temp = [];
            for (let i = 0; i < 2; ++i) {
                temp.push(response.data.content[i]);
            }
            setPosts(temp);
        }).catch(err => {
            console.log(err);
        });
    }, [])

    console.log(posts);

    return(
        <div className="home">
            <Header />
            <div className="grey-back build-home">
                <div className="row w-container block">
                    <div className="col text-content">
                        <div className="text-banner-wrap vertical-center">
                            <div className="text banner-title">Build Guides</div>
                            <div className="text banner-content">Building your own PC and need ideas on where to get started? 
                            Explore our build guides which cover systems for a variety of use-cases and budgets.</div>
                            <div className="button"><a type="button" href="/list" className="btn btn-primary btn-lg">View the Build Guilde</a></div>
                        </div>
                    </div>
                    {
                        posts?.map(e => 
                            <div className="col">
                                <BuildTag post={e}/>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="light-back home-product">
                <div className="w-container">
                    <div className="row block-title">Browse Product</div>
                    <div className="row block small-container">
                        <div className="col-6 wrap-text">
                            <div className="row">
                                <div className="col text-center">
                                    <div className="v-center">
                                        <i class="fas fa-desktop"></i>
                                        <div className="title">Product Browsing</div>
                                        <div className="context">Wanna find some thing?!</div>
                                    </div>
                                </div>
                                <div className="col text-center">
                                    <div className="first">
                                        <Link to="/products/cpu">
                                            <img src={cpu} alt="cpu" className="img"/>
                                            <div className="product-title">CPU</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="col-img">
                                <Link to="/products/motherboard">
                                    <img src={motherboard} alt="cpu" className="img"/>
                                    <div className="product-title">Motherboard</div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="col-img ">
                                <Link to="/products/memory">
                                    <img src={memory} alt="cpu" className="img"/>
                                    <div className="product-title">Memory</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row block small-container">
                        <div className="col text-center">
                            <div className="col-img">
                                <Link to="/products/ssd">
                                    <img src={ssd} alt="cpu" className="img"/>
                                    <div className="product-title">Solid State Drive</div>
                                </Link>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="col-img">
                                <Link to="/products/power">
                                    <img src={power} alt="cpu" className="img"/>
                                    <div className="product-title">Power Supply</div>
                                </Link>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="col-img ">
                                <Link to="/products/video-card">
                                    <img src={videocard} alt="cpu" className="img"/>
                                    <div className="product-title">Video Card</div>
                                </Link>
                            </div>
                        </div>
                        <div className="col see-more">
                            <div className="button text-center">
                                <a href="/products" type="button" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="carousel-slide">
                <Carousel />
            </div>

            <div className="build-guild white-back">
                
            </div>

            <div className="product-browsing grey-back">
                <ProductBrowsing />
            </div> */}
            <Footer />
        </div>
    );
}

export default Home;