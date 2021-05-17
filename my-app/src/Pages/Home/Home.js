import React, { useEffect, useState } from 'react';


import './Home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import ProductSuggestion from './product-suggestion-section/product-suggestion-section';
import PCBuildSuggestion from './pc-build-suggestion/pc-build-suggestion';
import BuildYourOwnPC from './build-your-own-pc-section/build-your-own-pc-section';

function Home() {
    return (
        <>
            <Header />
            <PCBuildSuggestion />
            <BuildYourOwnPC />
            <br />
            <ProductSuggestion />
            <Footer />
        </>
    );
}

export default Home;