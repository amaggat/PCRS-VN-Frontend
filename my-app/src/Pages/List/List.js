import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import "./List.css"
import Table from './Table'; 

class List extends Component {
    render () {
        const noIssue = (
            <div className="row">
                <div className="col-lg-9 no-issue">
                    <i class="tick far fa-check-circle"></i>
                    <span className="title">Compatibility: </span>
                    <span className="text">No issues or incompatibilities found.</span> 
                </div>
                <div className="col-lg-3 wattage">
                    <span className="title">Estimate Wattage: </span>
                    <span className="text">220 W</span>
                </div>
            </div>
        )

        const Issue = (
            <div className="row">
                <div className="col-lg-9 issue">
                    <i class="untick far fa-times-circle"></i>
                    <span className="title">Compatibility: </span>
                    <span className="warning-text">Warning! These parts have potential issues or incompatibilities.</span>
                </div>
                <div className="col-lg-3 wattage">
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
                    {/* if noIssue, the background will be set to green. Else "Issue" will return red. */}
                    {noIssue}
                </div>

                <div className="tab-content sb-table w-container block" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-system" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Table /> 
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default List;