import React, { Component } from 'react';
import BuildFilter from './BuildFilter';
import BuildTag from './BuildTag';
import PageNav from '../../Components/Page/PageNav';
import TopFunction from './TopFunction';

class Build extends Component {
    render () {
        return (
            <div className="completed-build">
                <div className="banner">
                    <h1 className="text-center">COMPLETED BUILD</h1>
                </div>

                <div className="tab-pane container-xl" id="pills-completed" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="row ">
                        <div className="col-2">
                            <BuildFilter/>
                        </div>
                        <div className="col-10">
                            <TopFunction/>
                            <div class="row mt-3">
                                <div class="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>  
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                                <div className="col-3 mb-4">
                                    <BuildTag/>
                                </div>
                            </div>
                            <PageNav/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Build;