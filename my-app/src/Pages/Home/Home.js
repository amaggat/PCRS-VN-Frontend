import React from 'react';

import Carousel from './Carousel';
import BuildGuild from './BuildGuild';
import ProductBrowsing from './ProductBrowsing.js';

import './Home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Home() {
    return(
        <div className="home">
            <Header />
            <div className="carousel-slide">
                <Carousel />
            </div>

            <div className="build-guild white-back">
                <BuildGuild />
            </div>

            <div className="product-browsing grey-back">
                <ProductBrowsing />
            </div>
            <Footer />
        </div>
    );
}

export default Home;