import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import Home from "./Home/Home"
import About from "./About/About"
import Help from "./Help/Help"

import List from "./List/List"
import Build from "./Build/Build"
import Products from './Product/Product'

import CPU from "./Product/Part/CPU"
// import MotherBoard from './Product/Part/MotherBoard'
// import Memory from './Product/Part/Memory'
// import Storage from './Product/Part/Storage'
// import VideoCard from './Product/Part/VideoCard'
// import Power from './Product/Part/Power'
// import Case from './Product/Part/Case'

import './Page.css'

const NotFound = ()=> <h1>404</h1>

class Page extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="page-body">
                    <Switch>
                        {/* Basic Page */}
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/help" component={Help} />
                        {/* Functional Page */}
                        <Route path="/list" component={List} />
                        <Route path="/builds" component={Build} />
                        <Route exact path="/products" component={Products} />
                        {/* Browse Product subpages */}
                        <Route path="/products/cpu" component={CPU} />
                        {/* <Route path="/products/mother-board" component={MotherBoard} />
                        <Route path="/products/memory" component={Memory} />
                        <Route path="/products/storage" component={Storage} />
                        <Route path="/products/video-card" component={VideoCard} />
                        <Route path="/products/power" component={Power} />
                        <Route path="/products/case" component={Case} /> */}
                        {/* 404 */}
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;