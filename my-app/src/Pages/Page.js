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
import Storage from './Product/Part/Storage/Storage'
import VideoCard from './Product/Part/VideoCard/VideoCard'
import Power from './Product/Part/Power/Power'
import Case from './Product/Part/Case/Case'

import CPUTemplate from './Product/Part/CPU/CPUTemplate';
import CaseTemplate from './Product/Part/Case/Sample/CaseTemplate';

import CCoolerTemplate from './Product/Part/CCooler/Sample/CCoolerTemplate';
import MemoryTemplate from './Product/Part/Memory/Sample/MemoryTemplate';
import MotherboardTemplate from './Product/Part/MotherBoard/Sample/MotherboardTemplate';
import PowerTemplate from './Product/Part/Power/PowerTemplate';
import StorageTemplate from './Product/Part/Storage/Sample/StorageTemplate';
import VidecardTemplate from './Product/Part/VideoCard/Sample/VideocardTemplate';

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
                        {/* Browse Product subpages */}
                        <Route exact path="/products/cpu" component={CPU} />
                        <Route exact path="/products/cpu-cooler" component={CCooler} />
                        <Route exact path="/products/mother-board" component={MotherBoard} />
                        <Route exact path="/products/memory" component={Memory} />
                        <Route exact path="/products/storage" component={Storage} />
                        <Route exact path="/products/video-card" component={VideoCard} />
                        <Route exact path="/products/power" component={Power} />
                        <Route exact path="/products/case" component={Case} />
                        {/* Page of individual product */}
                        <Route path="/products/cpu/:id" component={CPUTemplate} />
                        <Route exact path="/products/power/:id" component={PowerTemplate} />
                        <Route exact path="/products/memory/sample" component={MemoryTemplate} />
                        <Route exact path="/products/motherboard/sample" component={MotherboardTemplate} />
                        <Route exact path="/products/storage/sample" component={StorageTemplate} />
                        <Route exact path="/products/video-card/sample" component={VidecardTemplate} />
                        {/* Not dont yet */}
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