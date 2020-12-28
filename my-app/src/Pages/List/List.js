import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formatCurrency from '../../Components/Page/CurrencyFormat'
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

// import CaseCard from './Part/CaseCard';
// import CCCCard from './Part/CCCard';
// import StorageCard from './Part/StorageCard';
import CPUCard from './Part/CPUCard';
import MemoryCard from './Part/MemoryCard';
import MotherBoardCard from './Part/MotherBoardCard';
import PowerCard from './Part/PowerCard';
import GPUCard from './Part/VideoCard';
import HDDCard from './Part/HDDCard';
import SSDCard from './Part/SSDCard';

import "./List.css"

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpu: JSON.parse(localStorage.getItem('cpu')),
            // ccooler: JSON.parse(localStorage.getItem('ccooler')),
            motherboard: JSON.parse(localStorage.getItem('motherboard')),
            memory: JSON.parse(localStorage.getItem('memory')),
            hdd: JSON.parse(localStorage.getItem('hdd')),
            ssd: JSON.parse(localStorage.getItem('ssd')),
            gpu: JSON.parse(localStorage.getItem('video-card')),
            // case: JSON.parse(localStorage.getItem('case')),
            power: JSON.parse(localStorage.getItem('power')),
        }
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll () {
        localStorage.clear();
        window.location.reload();
    }

    render () {
        const {cpu, motherboard} = this.state
        var socket = null;

        if (cpu !== null || motherboard !== null) {
            cpu !== null ? socket = cpu.socket : socket = motherboard.socket
            console.log(socket)
            localStorage.setItem('socket', JSON.stringify(socket));
        }

        var total = 0
        Object.entries(this.state).map(
            parts => parts[1]?.price ? total += parts[1].price : null
        )

        const noIssue = (
            <div className="row">
                <div className="col-lg-9 no-issue">
                    <i class="tick far fa-check-circle"></i>
                    <span className="title">Compatibility: </span>
                    <span className="text">Dunno.</span> 
                </div>
                <div className="col-lg-3 wattage">
                    <i class="lightning fas fa-bolt"></i>
                    <span className="title">Estimate Wattage: </span>
                    <span className="text">... W</span>
                </div>
            </div>
        )

        const Issue = (
            <div className="row">
                <div className="issue">
                    <i class="untick far fa-times-circle"></i>
                    <span className="title">Compatibility: </span>
                    <span className="warning-text">Dunno.</span>
                </div>
                <div className="col-lg-3 wattage">
                    <i class="lightning fas fa-bolt"></i>
                    <span className="title">Estimate Wattage: </span>
                    <span className="text">220 W</span>
                </div>
            </div>
        )
        return (
            <div className="system-build white-back">
                <Header />
                <div className="banner">
                    <h1 className="text-center">SYSTEM BUILD</h1>
                </div>

                <div className="warn w-container block">
                    <div className="row list-link">
                        <i class="fas fa-link"></i>
                        <Link className="list-link-url" url="/list/">https://localhost:3000/list/</Link>
                    </div>
                    {/* if noIssue, the background will be set to green. Else "Issue" will return red. */}
                    {noIssue}
                </div>

                <div className="tab-content sb-table w-container block" id="pills-tabContent">
                    {
                        this.state ? 
                            <div className="text-right">
                                <button type="button" className="btn btn-primary btn-sm" onClick={this.removeAll}>Remove all</button>
                            </div>
                        : null

                    }
                    <div className="tab-pane fade show active" id="pills-system" role="tabpanel" aria-labelledby="pills-home-tab">
                    <table className="table title">
                        <thead>
                            <tr>
                                <th scope="col">Component</th>
                                <th scope="col">Selection</th>
                                <th scope="col">Base</th>
                                <th scope="col">Promo</th>
                                <th scope="col">Snipping</th>
                                <th scope="col">Tax</th>
                                <th scope="col-2">Price</th>
                                <th scope="col">Where</th>
                            </tr>
                        </thead>
                        <tbody className="attribute">
                            <CPUCard />
                            <MotherBoardCard />
                            <MemoryCard />
                            <HDDCard />
                            <SSDCard />
                            <GPUCard />
                            <PowerCard />
                            {/* <CCCCard /> */}
                            {/* <StorageCard /> */}
                            {/* <CaseCard /> */}
                        </tbody>
                    </table>
                    </div>
                </div>

                <div className="w-container block total-price">
                    <span className="text title">PRICE: </span>
                    <span className="text price">{formatCurrency(total) + " VND"}</span>
                </div>

                <div className="w-container block">
                    <div className="row note-title">Compatibility Notes</div>
                    <dir className="note-text">
                        <span className="note-link">
                            <i class="fas fa-sticky-note"></i>
                            <span>Note:</span>
                        </span>
                        <span className="content">Some physical dimension restrictions cannot (yet) be automatically checked, such as cpu cooler / RAM clearance with modules using tall heat spreaders. </span>
                    </dir>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default List;