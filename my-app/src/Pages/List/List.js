import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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
import { AddPCProfileService } from '../../Client/AccountService';
import { toast } from 'react-toastify';

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
            isLoading: false,
            name: ''
        }
        this.removeAll = this.removeAll.bind(this);
        this.handleAddBuild = this.handleAddBuild.bind(this);
    }

    async handleAddBuild() {
        const { cpu, motherboard, memory, hdd, ssd, gpu, power, name } = this.state;
        let data = {}
        if (cpu !== null) {
            data.cpu = [{
                id: cpu.id
            }]
        }
        if (gpu !== null) {
            data.gpu = [{
                id: gpu.id
            }]
        }
        if (motherboard !== null) {
            data.main = [{
                id: motherboard.id
            }]
        }
        if (power !== null) {
            data.psu = [{
                id: power.id
            }]
        }
        if (hdd !== null) {
            data.hdd = [{
                id: hdd.id
            }]
        }
        if (ssd !== null) {
            data.ssd = [{
                id: ssd.id
            }]
        }
        if (memory !== null) {
            data.ram = [{
                id: memory.id
            }]
        }
        this.setState({
            isLoading: true,
        })
        try {
            const result = await AddPCProfileService({name, payload: data});
            if (result.data.success) {
                toast.dark('Added to Collection!');
            } else {
                toast.error(`Error: ${result.data.jwt}`)
            }
        } catch (error) {
            toast.error(`Error: ${error}`)
        }
        this.setState({
            isLoading: false
        })
    }

    removeAll() {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        const { cpu, motherboard, isLoading, name } = this.state
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

        return (
            <div className="system-build white-back">
                <Header />
                <div className="banner">
                    <h1 className="text-center">SYSTEM BUILD</h1>
                </div>

                <div className="warn w-container block">
                    <div className="row list-link">
                        <i class="fas fa-link"></i>
                        <div className="list-link-url">Build your own PC</div>
                    </div>
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
                                    <th scope="col">Price</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col-2">&nbsp;</th>
                                    <th scope="col">Retailer</th>
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
                    <div className="row note-title">Add this build to your collection</div>
                    <div className="current-build-name">
                        <input className="form-control" value={name} onChange={(event) => this.setState({ name: event.target.value })} type="text" placeholder="Your PC name here" />
                        <br />
                        <Button color="primary" block disabled={isLoading} onClick={() => this.handleAddBuild()}>
                            <i class="fa fa-plus" />
                            Add to collection
                        </Button>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default List;