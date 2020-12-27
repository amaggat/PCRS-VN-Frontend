import React, { Component } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import './Page.css'

import NotFound from "./NotFound";

import Login from "./Account/Login";
import Register from "./Account/Register";

import Home from "./Home/Home"
import About from "./About/About"
import Help from "./Help/Help"

import List from "./List/List"
import Build from "./Build/Build"
import Products from './Product/Product'

import CPU from "./Product/Part/CPU/CPU"
import CCooler from './Product/Part/CCooler/CCooler'
import MotherBoard from './Product/Part/MotherBoard/MotherBoard'
import Memory from './Product/Part/Memory/Memory'
import SSD from './Product/Part/SSD/SSD'
import HDD from './Product/Part/HDD/HDD'
import VideoCard from './Product/Part/VideoCard/VideoCard'
import Power from './Product/Part/Power/Power'
import Case from './Product/Part/Case/Case'

import CPUTemplate from './Product/Part/CPU/CPUTemplate';
import MemoryTemplate from './Product/Part/Memory/MemoryTemplate';
import PowerTemplate from './Product/Part/Power/PowerTemplate';
import MotherboardTemplate from './Product/Part/MotherBoard/MotherboardTemplate';
import VidecardTemplate from './Product/Part/VideoCard/VideocardTemplate';
import SSDTemplate from './Product/Part/SSD/SSDTemplate';
import HDDTemplate from './Product/Part/HDD/HDDTemplate';

import CaseTemplate from './Product/Part/Case/Sample/CaseTemplate';
import CCoolerTemplate from './Product/Part/CCooler/Sample/CCoolerTemplate';
import BuildTemplate from './Build/BuildTemplate';

class Page extends Component {
    render() {
        return (
            <div className="App">   
                <div className="page-body">
                    <Switch>
                        {/* Login and Register Page */}
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register} />
                        {/* Basic Page */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/help" component={Help} />
                        {/* Functional Page */}
                        <Route exact path="/list" component={List} />
                        <Route exact path="/builds" component={Build} />
                        <Route exact path="/products" component={Products} />
                        {/* Browse Build */}
                        <Route exact path="/builds/:id" component={BuildTemplate} />

                        {/* Browse Product subpages */}
                        <Route exact path="/products/cpu" component={CPU} />
                        {/* <Route exact path="/products/cpu?page=:number" component={CPU} /> */}
                        <Route exact path="/products/cpu-cooler" component={CCooler} />
                        <Route exact path="/products/motherboard" component={MotherBoard} />
                        <Route exact path="/products/memory" component={Memory} />
                        <Route exact path="/products/hdd" component={HDD} />
                        <Route exact path="/products/ssd" component={SSD} />
                        <Route exact path="/products/video-card" component={VideoCard} />
                        <Route exact path="/products/power" component={Power} />
                        <Route exact path="/products/case" component={Case} />
                        {/* Page of individual product */}
                        <Route path="/products/cpu/:id" component={CPUTemplate} />
                        <Route path="/products/power/:id" component={PowerTemplate} />
                        <Route path="/products/memory/:id" component={MemoryTemplate} />
                        <Route path="/products/motherboard/:id" component={MotherboardTemplate} />
                        <Route path="/products/video-card/:id" component={VidecardTemplate} />
                        <Route path="/products/ssd/:id" component={SSDTemplate} />
                        <Route path="/products/hdd/:id" component={HDDTemplate} />
                        {/* Not ready yet */}
                        <Route exact path="/products/case/sample" component={CaseTemplate} />
                        <Route exact path="/products/cpu-cooler/sample" component={CCoolerTemplate} />
                        {/* 404 */}
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Page;