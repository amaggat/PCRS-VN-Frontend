import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const CompletedBuilds = () => {
    return (
        <div className="build white-back">
            <Header />
            <div className="banner">
                <h1 className="text-center">COMPLETED BUILDS</h1>
            </div>
            <div className="tab-pane w-container" id="pills-completed" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row block section-title">Desktop / Gaming / Streaming</div>
            </div>
            <Footer />
        </div>
    )
}

export default CompletedBuilds