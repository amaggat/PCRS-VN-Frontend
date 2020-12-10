import React from 'react';

import Carousel from './Carousel';
import BuildGuild from './BuildGuild';
import ProductBrowsing from './ProductBrowsing.js';

import './Home.css';

function Home() {
    return(
        <div className="Body">
            <div className="carousel-slide">
                <Carousel />
            </div>

            <div className="build-guild">
                <BuildGuild />
            </div>

            <div className="greyBack">
                <ProductBrowsing />
            </div>
        </div>
    );
}

export default Home;