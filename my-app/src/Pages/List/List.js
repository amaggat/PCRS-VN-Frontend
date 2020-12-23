import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <i class="lightning fas fa-bolt"></i>
                    <span className="title">Estimate Wattage: </span>
                    <span className="text">220 W</span>
                </div>
            </div>
        )

        const Issue = (
            <div className="row">
                <div className="issue">
                    <i class="untick far fa-times-circle"></i>
                    <span className="title">Compatibility: </span>
                    <span className="warning-text">Warning! These parts have potential issues or incompatibilities.</span>
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
                        <Link className="list-link-url" url="/list/bRDXKB">https://localhost:3000/list/bRDXKB</Link>
                    </div>
                    {/* if noIssue, the background will be set to green. Else "Issue" will return red. */}
                    {noIssue}
                </div>

                <div className="tab-content sb-table w-container block" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-system" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Table /> 
                    </div>
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